package com.github.clemp6r.klogicalornot

import com.github.clemp6r.klogicalornot.model.*
import org.w3c.dom.Element
import org.w3c.dom.Node
import kotlin.browser.document
import kotlin.browser.localStorage
import kotlin.browser.window
import kotlin.dom.onClick

class Game(val questions: List<Question>, val taunts: List<Taunt>) {

    var bestScore = localStorage.getItem("bestScore")?.let { parseInt(it) } ?: 0
    var round: Round? = null
    var mode = GameMode.NORMAL
    val view = View(null, this)

    init {
        updateBestScore()
        newRound()
    }

    fun animateIntro() {
        View.addClass("body", "active")
    }

    fun onNewQuestion(question: Question) {
        View.setHtml("question", question.label)

        View.setHtml("answer-left-label", question.answers[0])
        View.setAttrs("answer-left-button", mapOf("data-event-data" to question.answers[0]))

        View.setHtml("answer-up-label", question.answers[1])
        View.setAttrs("answer-up-button", mapOf("data-event-data" to question.answers[1]))

        View.setHtml("answer-right-label", question.answers[2])
        View.setAttrs("answer-right-button", mapOf("data-event-data" to question.answers[2]))
    }

    fun onUpdateLifeBar(hp: Float) {
        View.getElement("life-bar")?.asDynamic().style.width = "$hp%"
    }

    fun onUpdateLifeBarState(lifeBarState: LifeBarState) {
        when (lifeBarState) {
            LifeBarState.NORMAL -> {
                View.removeClass("life-bar", "life-bar--low")
                View.removeClass("life-bar", "life-bar--critical")
            }
            LifeBarState.LOW -> {
                View.removeClass("life-bar", "life-bar--critical")
                View.addClass("life-bar", "life-bar--low")
            }
            LifeBarState.CRITICAL -> {
                View.removeClass("life-bar", "life-bar--low")
                View.addClass("life-bar", "life-bar--critical")
            }
        }
    }

    fun onNewTaunt(taunt: Taunt) {
        View.setHtml("taunt", taunt.message)

        if (taunt.tauntType == TauntType.MEAN) {
            View.addClass("bloody", "u-no-transition")
            View.addClass("bloody", "active")
            View.removeClass("bloody", "u-no-transition")
        }

        window.setTimeout({
            if (taunt.tauntType == TauntType.MEAN) {
                View.removeClass("bloody", "active")
            }
        }, 200)
    }

    fun onGameOver(score: List<Boolean>) {
        // update score board
        val wins = score.count { it == true }
        val loses = score.size - wins

        View.setHtml("wins", wins.toString())
        View.setHtml("loses", loses.toString())

        // update tweet my game button
        val baseUrl = "https://twitter.com/home?status="

        val tweetMessage = "Boom! Just made a score of $wins/${score.size}, come and beat me! %23logicalornot http://gabinaureche.com/logicalornot via @zh0uzi"

        View.setAttrs("tweet-my-game-button", mapOf("href" to baseUrl + tweetMessage))

        // update best score
        bestScore = Math.max(bestScore, wins)
        updateBestScore()

        // show game over modal
        View.removeClass("modal", "u-hide")

        window.setTimeout({
            View.addClass("modal", "active")
        }, 100)
    }

    fun onNewRound() {
        newRound()
    }

    fun onSelectAnswer(answer: String) {
        round?.submitAnswer(answer)
    }

    fun onNormalMode() {
        this.mode = GameMode.NORMAL
        newRound()
    }

    fun onHardcoreMode() {
        this.mode = GameMode.HARDCODE
        newRound()
    }

    private fun updateBestScore() {
        localStorage.setItem("bestScore", bestScore.toString())
        View.setHtml("best-score", bestScore.toString())
    }

    private fun newRound() {
        val round = this.round
        if (round != null) {
            if (round.status == RoundStatus.GAME_OVER) {
                View.removeClass("modal", "active")

                window.setTimeout({
                    View.addClass("model", "u-hide")
                }, 500)
            }

            round.stop()
        }

        this.round = Round(questions, taunts, mode, this)
    }
}

enum class GameMode {
    NORMAL, HARDCODE
}

enum class LifeBarState {
    NORMAL, LOW, CRITICAL
}

class Button(val element: Element)

class View(selector: String?,val game: Game) {

    val element: Node = if (selector == null) document else getElement(selector)!!


    var buttons = mapOf<String, Button>()

    init {
        val keys = mapOf(
                37 to "left",
                38 to "up",
                39 to "right",
                32 to "spacebar"
        )

        val buttonElements = document.querySelectorAll("[data-bind]")

        for (i in 0..buttonElements.length - 1) {
            val buttonElement = buttonElements[i] as Element
            val keyShortcut = getAttribute(buttonElement, "data-bind")!!

            val item = Button(buttonElement)
            this.buttons += keyShortcut to item
            item.element.onClick {
                publishButtonData(item)
            }
        }

        element.addEventListener("keydown", { event ->
            val keyName = keys[event.   asDynamic().which]
            if (keyName != null) {
                val button = this.buttons[keyName]!!
                addClass(button.element, "active")

                event.preventDefault()
            }
        })

        element.addEventListener("keyup", { event ->
            val keyName = keys[event.asDynamic().which]
            if (keyName != null) {
                val button = this.buttons[keyName]!!
                removeClass(button.element, "active")
                publishButtonData(button)

                event.preventDefault()
            }
        })

        val normalModeButton = getElement("normal-mode")!!
        val hardcoreModeButton = getElement("hardcore-mode")!!
        normalModeButton.onClick {
            if (!hasClass(normalModeButton, "active")) {
                addClass(normalModeButton, "active")
                removeClass(hardcoreModeButton, "active")
                game.onNormalMode()
            }
        }

        hardcoreModeButton.onClick {
            if (!hasClass(hardcoreModeButton, "active")) {
                addClass(hardcoreModeButton, "active")
                removeClass(normalModeButton, "active")
                game.onHardcoreMode()
            }
        }
    }

    private fun publishButtonData(button: Button) {
        val event = getAttribute(button.element, "data-event")

        if (event == "view:selectAnswer") {
            val answer = getAttribute(button.element, "data-event-data")!!
            game.onSelectAnswer(answer)
        } else if (event == "view:newRound") {
            game.onNewRound()
        }
    }

    companion object {
        fun setHtml(selector: String, value: String) {
            val element = getElement(selector)
            element?.innerHTML = value
        }

        fun addClass(selector: String, className: String) {
            addClass(getElement(selector), className)
        }

        fun addClass(element: Element?, className: String) {
            element?.classList?.add(className)
        }

        fun removeClass(selector: String, className: String) {
            val element = getElement(selector)
            removeClass(element, className)
        }

        fun removeClass(element: Element?, className: String) {
            element?.classList?.remove(className)
        }

        fun getElement(selector: String): Element? {
            var element = document.getElementById("bind-" + selector)

            if (element == null) {
                element = document.querySelector("selector")
            }

            return element
        }

        fun setAttrs(selector: String, attrs: Map<String, String>): Element? {
            val element = getElement(selector)

            attrs.forEach {
                element?.setAttribute(it.key, it.value)
            }

            return element
        }

        fun getAttribute(element: Element, name: String) = element.getAttribute(name)

        fun hasClass(element: Element, className: String) = element.classList.contains(className)
    }
}
