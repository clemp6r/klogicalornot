package com.github.clemp6r.klogicalornot

import com.github.clemp6r.klogicalornot.model.Question
import com.github.clemp6r.klogicalornot.model.Taunt
import com.github.clemp6r.klogicalornot.model.TauntType
import kotlin.browser.window

fun main(args: Array<String>) {
    println("Starting the game...")

    val questions = listOf(
            Question("false || true", listOf("false", "true", "undefined")),
            Question("null && false", listOf("null", "false", "true")),
            Question("(false && 'bar') || 'foo'", listOf("false", "'bar'", "'foo'")),
            Question("'foo' || 'bar'", listOf("'foo'", "'bar'", "true")),
            Question("'foo' && 'bar' || 'quz'", listOf("'foo'", "'bar'", "'quz'")),
            Question("!'foo' && 'bar'", listOf("true", "'bar'", "false")),
            Question("'foo' && !(false && null)", listOf("'foo'", "false", "true")),
            Question("!undefined || 'foo'", listOf("true", "'foo'", "false")),
            Question("'foo' || !!'bar'", listOf("'foo'", "true", "false")),
            Question("(null && 'foo') || 'bar'", listOf("null", "'foo'", "'bar'")),
            Question("(null || []).push('foo')", listOf("null", "['foo']", "1")),
            Question("('foo' || 'bar').indexOf('f')", listOf("-1", "0", "1")),
            Question("null || 'foo' && 'bar'", listOf("null", "'foo'", "'bar'")),
            Question("[] && [].push('foo')", listOf("'foo'", "['foo']", "1")),
            Question("null || [] || {}", listOf("null", "[]", "{}")),
            Question("!!!'foo'", listOf("'foo'", "true", "false")),
            Question("![].length", listOf("false", "true", "0")),
            Question("'foo' && ('bar' || null)", listOf("'foo'", "'bar'", "null")),
            Question("'foo' !== ('foo' && 'bar')", listOf("'foo'", "true", "false")),
            Question("2 > (3 && 0)", listOf("false", "true", "2")),
            Question("false && false", listOf("false", "true", "null")),
            Question("!false || 'foo'", listOf("false", "'foo'", "true")),
            Question("1 >= 1", listOf("1", "true", "false")),
            Question("!!['foo'].indexOf('foo')", listOf("0", "true", "false")),
            Question("0 == false", listOf("0", "false", "true")),
            Question("1 > 2", listOf("1", "true", "false")),
            Question("!!'foo'", listOf("'foo'", "true", "false")),
            Question("'foo' == 'bar'", listOf("'foo'", "true", "false")),
            Question("0 || 1", listOf("0", "1", "true")),
            Question("1 === true", listOf("1", "true", "false")),
            Question("null == undefined", listOf("null", "true", "false")),
            Question("null == 0", listOf("null", "true", "false")),
            Question("null > -1", listOf("null", "true", "false")),
            Question("null < 1", listOf("null", "true", "false")),
            Question("false == ''", listOf("true", "false", "''")),
            Question("(function(){}).length == 0", listOf("0", "false", "true"))

    )

    val niceTaunts = listOf(
            "Such skills!",
            "Damn good!",
            "That was easy...",
            "Nice one!",
            "Bingo!",
            "You really know your stuff!",
            "Score!",
            "Excellent!",
            "You're an inspiration",
            "Like the Willy Wonka of JS. Magical."
    )

    val meanTaunts = listOf(
            "Come on!",
            "...",
            "Really dude?",
            "Do you even javascript?",
            "Haha!",
            "Are u kidding me?",
            "Oh dear...",
            "*sigh*",
            "Try using the force, Luke"
    )

    val taunts = niceTaunts.map { Taunt(TauntType.NICE, it) } + meanTaunts.map { Taunt(TauntType.MEAN, it) }
    val app = Game(questions, taunts)

    window.setTimeout({ app.animateIntro() }, 500)
}