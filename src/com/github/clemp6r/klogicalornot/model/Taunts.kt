package com.github.clemp6r.klogicalornot.model

enum class TauntType {
    NICE, MEAN
}

class Taunt(val tauntType: TauntType, val message: String)