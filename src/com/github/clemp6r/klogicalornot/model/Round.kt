package com.github.clemp6r.klogicalornot.model

import com.github.clemp6r.klogicalornot.Game
import com.github.clemp6r.klogicalornot.GameMode
import com.github.clemp6r.klogicalornot.GamePlay
import com.github.clemp6r.klogicalornot.LifeBarState
import kotlin.browser.window

val gamePlays = mapOf(
        GameMode.NORMAL   to GamePlay(15, true, true, Gaps(listOf(15, 15, 15), listOf(0, 0, 0))),
        GameMode.HARDCODE to GamePlay(15, true, false, Gaps(listOf(1, 2, 3), listOf(3, 2, 1)))
)

class Round(val questions: List<Question>,
            val taunts: List<Taunt>,
            val gameMode: GameMode,
            val game: Game) {

    var status = RoundStatus.READY
    var taunt: Taunt? = null
    val gamePlay = gamePlays[gameMode]!!
    var score = emptyList<Boolean>()
    var currentQuestion: Question? = null
    var lifeBar = 100f
    var lifeBarState: LifeBarState? = null
    private var animateId: Int? = null

    private val config = Config(gamePlay)

    init {
        setLifeBarHp(config.maxValue)
        setTaunt(Taunt(TauntType.NICE, "So, what's the result of..."))
        setRandomQuestion()
        animate()
    }

    private fun animate() {
        if (status == RoundStatus.GAME_OVER) return

        if (status == RoundStatus.PLAYING) {
            if (config.iteration >= config.totalIterations) {
                setLifeBarHp(0f)
                stop(notify = true)

                return
            }

            val easingValue = ease(config.iteration, config.minValue, config.maxValue, config.totalIterations)
            setLifeBarHp(config.maxValue - easingValue)

            if (config.timer) {
                config.iteration++
            }
        }

        this.animateId = window.requestAnimationFrame {
            animate()
        }
    }

    private fun ease(currentIteration: Int, startValue: Float, changeInValue: Float, total: Int): Float {
        return -changeInValue * (currentIteration / total.toFloat()) * ((currentIteration / total.toFloat()) - 2) + startValue
    }

    private fun setQuestion(question: Question): Question {
        val answers = if (gamePlay.shuffleAnswers) {
            question.answers.shuffle()
        } else {
            question.answers
        }

        val shuffleQuestion = question.copy(answers = answers)
        currentQuestion = shuffleQuestion

        game.onNewQuestion(shuffleQuestion)

        return shuffleQuestion
    }

    private fun setRandomQuestion() {
        val question = questions.shuffle().first()
        setQuestion(question)
    }

    private fun setTaunt(taunt: Taunt) {
        this.taunt = taunt
        game.onNewTaunt(taunt)
    }

    private fun setLifeBarHp(hp: Float) {
        lifeBar = hp
        updateLifeBarState()
        game.onUpdateLifeBar(hp)
    }

    private fun updateLifeBarState() {
        val state = if (lifeBar > 50) {
            LifeBarState.NORMAL
        } else if (lifeBar > 20) {
            LifeBarState.LOW
        } else {
            LifeBarState.CRITICAL
        }

        if (lifeBarState != state) {
            lifeBarState = state
            game.onUpdateLifeBarState(state)
        }
    }

    fun submitAnswer(answer: String) {
        if (status == RoundStatus.GAME_OVER) return

        status = RoundStatus.PLAYING

        if (eval(currentQuestion!!.label) == eval(answer)) {
            riseLifeBar()
            score += true
            setRandomTaunt(TauntType.NICE)
        } else {
            dropLifebar()
            score += false
            setRandomTaunt(TauntType.MEAN)
        }

        if (questions.isNotEmpty()) {
            setRandomQuestion()
        } else {
            stop(notify = true)
        }
    }

    private fun setRandomTaunt(type: TauntType) {
        val taunt = taunts.filter { it.tauntType == type }
                .shuffle()
                .first()

        setTaunt(taunt)
    }

    private fun riseLifeBar() {
        val complexity = getQuestionComplexity(currentQuestion!!.label)
        val gap = gamePlay.gaps.winning[complexity] * FPS

        config.iteration = Math.max(config.iteration - gap, 0)
    }

    private fun dropLifebar() {
        val complexity = getQuestionComplexity(currentQuestion!!.label)
        val gap = gamePlay.gaps.losing[complexity] * FPS

        config.iteration = Math.min(config.iteration + gap, config.totalIterations)
    }

    fun stop(notify: Boolean = false) {
        status = RoundStatus.GAME_OVER
        cancelAnimationFrame(animateId!!)

        if (notify) {
            game.onGameOver(score)
        }
    }

    private fun cancelAnimationFrame(animateId: Int) {
        window.cancelAnimationFrame(animateId)
    }

    companion object {
        fun getQuestionComplexity(question: String): Int {
            val length = question.length
            return if (length >= 15) {
                2
            } else if (length >= 10) {
                1
            } else {
                0
            }
        }
    }
}

enum class RoundStatus {
    READY,
    PLAYING,
    GAME_OVER
}

const val FPS = 60

class Config(gamePlay: GamePlay) {
    val timer = gamePlay.timer
    val minValue = 0f
    val maxValue = 100f
    var iteration = 0
    val totalIterations = gamePlay.duration * FPS
}

fun <T> List<T>.shuffle(): List<T> {
    if (isEmpty() || size == 1) {
        return this
    } else {
        val index: Int = Math.floor(Math.random() * this.size) // 0..1..2
        val head = this[index]
        val tail = this.take(Math.max(0, index)) + this.drop(Math.max(index + 1))
        return listOf(head) + tail.shuffle()
    }
}