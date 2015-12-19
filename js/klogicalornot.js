(function (Kotlin) {
  'use strict';
  var _ = Kotlin.defineRootPackage(null, /** @lends _ */ {
    com: Kotlin.definePackage(null, /** @lends _.com */ {
      github: Kotlin.definePackage(null, /** @lends _.com.github */ {
        clemp6r: Kotlin.definePackage(null, /** @lends _.com.github.clemp6r */ {
          klogicalornot: Kotlin.definePackage(null, /** @lends _.com.github.clemp6r.klogicalornot */ {
            main_kand9s$f_1: function (app) {
              return function () {
                app.animateIntro();
              };
            },
            main_kand9s$: function (args) {
              Kotlin.println('Starting the game...');
              var questions = Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([new _.com.github.clemp6r.klogicalornot.model.Question('false || true', Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$(['false', 'true', 'undefined'])), new _.com.github.clemp6r.klogicalornot.model.Question('null && false', Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$(['null', 'false', 'true'])), new _.com.github.clemp6r.klogicalornot.model.Question("(false && 'bar') || 'foo'", Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$(['false', "'bar'", "'foo'"])), new _.com.github.clemp6r.klogicalornot.model.Question("'foo' || 'bar'", Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$(["'foo'", "'bar'", 'true'])), new _.com.github.clemp6r.klogicalornot.model.Question("'foo' && 'bar' || 'quz'", Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$(["'foo'", "'bar'", "'quz'"])), new _.com.github.clemp6r.klogicalornot.model.Question("!'foo' && 'bar'", Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$(['true', "'bar'", 'false'])), new _.com.github.clemp6r.klogicalornot.model.Question("'foo' && !(false && null)", Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$(["'foo'", 'false', 'true'])), new _.com.github.clemp6r.klogicalornot.model.Question("!undefined || 'foo'", Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$(['true', "'foo'", 'false'])), new _.com.github.clemp6r.klogicalornot.model.Question("'foo' || !!'bar'", Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$(["'foo'", 'true', 'false'])), new _.com.github.clemp6r.klogicalornot.model.Question("(null && 'foo') || 'bar'", Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$(['null', "'foo'", "'bar'"])), new _.com.github.clemp6r.klogicalornot.model.Question("(null || []).push('foo')", Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$(['null', "['foo']", '1'])), new _.com.github.clemp6r.klogicalornot.model.Question("('foo' || 'bar').indexOf('f')", Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$(['-1', '0', '1'])), new _.com.github.clemp6r.klogicalornot.model.Question("null || 'foo' && 'bar'", Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$(['null', "'foo'", "'bar'"])), new _.com.github.clemp6r.klogicalornot.model.Question("[] && [].push('foo')", Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$(["'foo'", "['foo']", '1'])), new _.com.github.clemp6r.klogicalornot.model.Question('null || [] || {}', Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$(['null', '[]', '{}'])), new _.com.github.clemp6r.klogicalornot.model.Question("!!!'foo'", Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$(["'foo'", 'true', 'false'])), new _.com.github.clemp6r.klogicalornot.model.Question('![].length', Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$(['false', 'true', '0'])), new _.com.github.clemp6r.klogicalornot.model.Question("'foo' && ('bar' || null)", Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$(["'foo'", "'bar'", 'null'])), new _.com.github.clemp6r.klogicalornot.model.Question("'foo' !== ('foo' && 'bar')", Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$(["'foo'", 'true', 'false'])), new _.com.github.clemp6r.klogicalornot.model.Question('2 > (3 && 0)', Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$(['false', 'true', '2'])), new _.com.github.clemp6r.klogicalornot.model.Question('false && false', Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$(['false', 'true', 'null'])), new _.com.github.clemp6r.klogicalornot.model.Question("!false || 'foo'", Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$(['false', "'foo'", 'true'])), new _.com.github.clemp6r.klogicalornot.model.Question('1 >= 1', Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$(['1', 'true', 'false'])), new _.com.github.clemp6r.klogicalornot.model.Question("!!['foo'].indexOf('foo')", Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$(['0', 'true', 'false'])), new _.com.github.clemp6r.klogicalornot.model.Question('0 == false', Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$(['0', 'false', 'true'])), new _.com.github.clemp6r.klogicalornot.model.Question('1 > 2', Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$(['1', 'true', 'false'])), new _.com.github.clemp6r.klogicalornot.model.Question("!!'foo'", Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$(["'foo'", 'true', 'false'])), new _.com.github.clemp6r.klogicalornot.model.Question("'foo' == 'bar'", Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$(["'foo'", 'true', 'false'])), new _.com.github.clemp6r.klogicalornot.model.Question('0 || 1', Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$(['0', '1', 'true'])), new _.com.github.clemp6r.klogicalornot.model.Question('1 === true', Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$(['1', 'true', 'false'])), new _.com.github.clemp6r.klogicalornot.model.Question('null == undefined', Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$(['null', 'true', 'false'])), new _.com.github.clemp6r.klogicalornot.model.Question('null == 0', Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$(['null', 'true', 'false'])), new _.com.github.clemp6r.klogicalornot.model.Question('null > -1', Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$(['null', 'true', 'false'])), new _.com.github.clemp6r.klogicalornot.model.Question('null < 1', Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$(['null', 'true', 'false'])), new _.com.github.clemp6r.klogicalornot.model.Question("false == ''", Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$(['true', 'false', "''"])), new _.com.github.clemp6r.klogicalornot.model.Question('(function(){}).length == 0', Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$(['0', 'false', 'true']))]);
              var niceTaunts = Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$(['Such skills!', 'Damn good!', 'That was easy...', 'Nice one!', 'Bingo!', 'You really know your stuff!', 'Score!', 'Excellent!', "You're an inspiration", 'Like the Willy Wonka of JS. Magical.']);
              var meanTaunts = Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$(['Come on!', '...', 'Really dude?', 'Do you even javascript?', 'Haha!', 'Are u kidding me?', 'Oh dear...', '*sigh*', 'Try using the force, Luke']);
              var destination = new Kotlin.ArrayList(Kotlin.modules['stdlib'].kotlin.collectionSizeOrDefault_pjxt3m$(niceTaunts, 10));
              var tmp$1;
              tmp$1 = niceTaunts.iterator();
              while (tmp$1.hasNext()) {
                var item = tmp$1.next();
                destination.add_za3rmp$(new _.com.github.clemp6r.klogicalornot.model.Taunt(_.com.github.clemp6r.klogicalornot.model.TauntType.object.NICE, item));
              }
              var tmp$0 = destination;
              var destination_0 = new Kotlin.ArrayList(Kotlin.modules['stdlib'].kotlin.collectionSizeOrDefault_pjxt3m$(meanTaunts, 10));
              var tmp$2;
              tmp$2 = meanTaunts.iterator();
              while (tmp$2.hasNext()) {
                var item_0 = tmp$2.next();
                destination_0.add_za3rmp$(new _.com.github.clemp6r.klogicalornot.model.Taunt(_.com.github.clemp6r.klogicalornot.model.TauntType.object.MEAN, item_0));
              }
              var taunts = Kotlin.modules['stdlib'].kotlin.plus_n5c7gi$(tmp$0, destination_0);
              var app = new _.com.github.clemp6r.klogicalornot.Game(questions, taunts);
              window.setTimeout(_.com.github.clemp6r.klogicalornot.main_kand9s$f_1(app), 500);
            },
            Game: Kotlin.createClass(null, function (questions, taunts) {
              var tmp$0, tmp$1;
              this.questions = questions;
              this.taunts = taunts;
              this.bestScore = (tmp$1 = (tmp$0 = localStorage.getItem('bestScore')) != null ? Kotlin.modules['stdlib'].kotlin.let_7hr6ff$(tmp$0, _.com.github.clemp6r.klogicalornot.Game.bestScore$f) : null) != null ? tmp$1 : 0;
              this.round = null;
              this.mode = _.com.github.clemp6r.klogicalornot.GameMode.object.NORMAL;
              this.view = new _.com.github.clemp6r.klogicalornot.View(null, this);
              this.updateBestScore();
              this.newRound();
            }, /** @lends _.com.github.clemp6r.klogicalornot.Game.prototype */ {
              animateIntro: function () {
                _.com.github.clemp6r.klogicalornot.View.object.addClass_puj7f4$('body', 'active');
              },
              onNewQuestion_inaamw$: function (question) {
                _.com.github.clemp6r.klogicalornot.View.object.setHtml_puj7f4$('question', question.label);
                _.com.github.clemp6r.klogicalornot.View.object.setHtml_puj7f4$('answer-left-label', question.answers.get_za3lpa$(0));
                _.com.github.clemp6r.klogicalornot.View.object.setAttrs_wlbtzh$('answer-left-button', Kotlin.modules['stdlib'].kotlin.mapOf_dvvt93$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('data-event-data', question.answers.get_za3lpa$(0))));
                _.com.github.clemp6r.klogicalornot.View.object.setHtml_puj7f4$('answer-up-label', question.answers.get_za3lpa$(1));
                _.com.github.clemp6r.klogicalornot.View.object.setAttrs_wlbtzh$('answer-up-button', Kotlin.modules['stdlib'].kotlin.mapOf_dvvt93$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('data-event-data', question.answers.get_za3lpa$(1))));
                _.com.github.clemp6r.klogicalornot.View.object.setHtml_puj7f4$('answer-right-label', question.answers.get_za3lpa$(2));
                _.com.github.clemp6r.klogicalornot.View.object.setAttrs_wlbtzh$('answer-right-button', Kotlin.modules['stdlib'].kotlin.mapOf_dvvt93$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('data-event-data', question.answers.get_za3lpa$(2))));
              },
              onUpdateLifeBar_mx4ult$: function (hp) {
                var tmp$0;
                ((tmp$0 = _.com.github.clemp6r.klogicalornot.View.object.getElement_61zpoe$('life-bar')) != null ? Kotlin.modules['stdlib'].kotlin.js.asDynamic_s8jyvl$(tmp$0) : null).style.width = hp.toString() + '%';
              },
              onUpdateLifeBarState_n0yrqf$: function (lifeBarState) {
                if (lifeBarState === _.com.github.clemp6r.klogicalornot.LifeBarState.object.NORMAL) {
                  _.com.github.clemp6r.klogicalornot.View.object.removeClass_puj7f4$('life-bar', 'life-bar--low');
                  _.com.github.clemp6r.klogicalornot.View.object.removeClass_puj7f4$('life-bar', 'life-bar--critical');
                }
                 else if (lifeBarState === _.com.github.clemp6r.klogicalornot.LifeBarState.object.LOW) {
                  _.com.github.clemp6r.klogicalornot.View.object.removeClass_puj7f4$('life-bar', 'life-bar--critical');
                  _.com.github.clemp6r.klogicalornot.View.object.addClass_puj7f4$('life-bar', 'life-bar--low');
                }
                 else if (lifeBarState === _.com.github.clemp6r.klogicalornot.LifeBarState.object.CRITICAL) {
                  _.com.github.clemp6r.klogicalornot.View.object.removeClass_puj7f4$('life-bar', 'life-bar--low');
                  _.com.github.clemp6r.klogicalornot.View.object.addClass_puj7f4$('life-bar', 'life-bar--critical');
                }
              },
              onNewTaunt_rypni4$: function (taunt) {
                _.com.github.clemp6r.klogicalornot.View.object.setHtml_puj7f4$('taunt', taunt.message);
                if (taunt.tauntType === _.com.github.clemp6r.klogicalornot.model.TauntType.object.MEAN) {
                  _.com.github.clemp6r.klogicalornot.View.object.addClass_puj7f4$('bloody', 'u-no-transition');
                  _.com.github.clemp6r.klogicalornot.View.object.addClass_puj7f4$('bloody', 'active');
                  _.com.github.clemp6r.klogicalornot.View.object.removeClass_puj7f4$('bloody', 'u-no-transition');
                }
                window.setTimeout(_.com.github.clemp6r.klogicalornot.Game.onNewTaunt_rypni4$f(taunt), 200);
              },
              onGameOver_k7jmfm$: function (score) {
                var tmp$0;
                var count = 0;
                tmp$0 = score.iterator();
                while (tmp$0.hasNext()) {
                  var element = tmp$0.next();
                  if (Kotlin.equals(element, true)) {
                    count++;
                  }
                }
                var wins = count;
                var loses = score.size - wins;
                _.com.github.clemp6r.klogicalornot.View.object.setHtml_puj7f4$('wins', wins.toString());
                _.com.github.clemp6r.klogicalornot.View.object.setHtml_puj7f4$('loses', loses.toString());
                var baseUrl = 'https://twitter.com/home?status=';
                var tweetMessage = 'Boom! Just made a score of ' + wins + '/' + score.size + ', come and beat me! %23logicalornot http://gabinaureche.com/logicalornot via @zh0uzi';
                _.com.github.clemp6r.klogicalornot.View.object.setAttrs_wlbtzh$('tweet-my-game-button', Kotlin.modules['stdlib'].kotlin.mapOf_dvvt93$(Kotlin.modules['stdlib'].kotlin.to_l1ob02$('href', baseUrl + tweetMessage)));
                this.bestScore = Math.max(this.bestScore, wins);
                this.updateBestScore();
                _.com.github.clemp6r.klogicalornot.View.object.removeClass_puj7f4$('modal', 'u-hide');
                window.setTimeout(_.com.github.clemp6r.klogicalornot.Game.onGameOver_k7jmfm$f_0, 100);
              },
              onNewRound: function () {
                this.newRound();
              },
              onSelectAnswer_61zpoe$: function (answer) {
                var tmp$0;
                (tmp$0 = this.round) != null ? tmp$0.submitAnswer_61zpoe$(answer) : null;
              },
              onNormalMode: function () {
                this.mode = _.com.github.clemp6r.klogicalornot.GameMode.object.NORMAL;
                this.newRound();
              },
              onHardcoreMode: function () {
                this.mode = _.com.github.clemp6r.klogicalornot.GameMode.object.HARDCODE;
                this.newRound();
              },
              updateBestScore: function () {
                localStorage.setItem('bestScore', this.bestScore.toString());
                _.com.github.clemp6r.klogicalornot.View.object.setHtml_puj7f4$('best-score', this.bestScore.toString());
              },
              newRound: function () {
                var round = this.round;
                if (round != null) {
                  if (round.status === _.com.github.clemp6r.klogicalornot.model.RoundStatus.object.GAME_OVER) {
                    _.com.github.clemp6r.klogicalornot.View.object.removeClass_puj7f4$('modal', 'active');
                    window.setTimeout(_.com.github.clemp6r.klogicalornot.Game.newRound$f, 500);
                  }
                  round.stop_6taknv$();
                }
                this.round = new _.com.github.clemp6r.klogicalornot.model.Round(this.questions, this.taunts, this.mode, this);
              }
            }, /** @lends _.com.github.clemp6r.klogicalornot.Game */ {
              bestScore$f: function (it) {
                return parseInt(it);
              },
              onNewTaunt_rypni4$f: function (taunt) {
                return function () {
                  if (taunt.tauntType === _.com.github.clemp6r.klogicalornot.model.TauntType.object.MEAN) {
                    _.com.github.clemp6r.klogicalornot.View.object.removeClass_puj7f4$('bloody', 'active');
                  }
                };
              },
              onGameOver_k7jmfm$f_0: function () {
                _.com.github.clemp6r.klogicalornot.View.object.addClass_puj7f4$('modal', 'active');
              },
              newRound$f: function () {
                _.com.github.clemp6r.klogicalornot.View.object.addClass_puj7f4$('model', 'u-hide');
              }
            }),
            GameMode: Kotlin.createEnumClass(function () {
              return [Kotlin.Enum];
            }, function $fun() {
              $fun.baseInitializer.call(this);
            }, function () {
              return {
                NORMAL: new _.com.github.clemp6r.klogicalornot.GameMode(),
                HARDCODE: new _.com.github.clemp6r.klogicalornot.GameMode()
              };
            }),
            LifeBarState: Kotlin.createEnumClass(function () {
              return [Kotlin.Enum];
            }, function $fun() {
              $fun.baseInitializer.call(this);
            }, function () {
              return {
                NORMAL: new _.com.github.clemp6r.klogicalornot.LifeBarState(),
                LOW: new _.com.github.clemp6r.klogicalornot.LifeBarState(),
                CRITICAL: new _.com.github.clemp6r.klogicalornot.LifeBarState()
              };
            }),
            Button: Kotlin.createClass(null, function (element) {
              this.element = element;
            }),
            View: Kotlin.createClass(null, function (selector, game) {
              var tmp$0, tmp$1, tmp$2, tmp$3, tmp$4, tmp$5;
              this.game = game;
              this.element = selector == null ? document : (tmp$0 = _.com.github.clemp6r.klogicalornot.View.object.getElement_61zpoe$(selector)) != null ? tmp$0 : Kotlin.throwNPE();
              this.buttons = Kotlin.modules['stdlib'].kotlin.mapOf();
              var keys = Kotlin.modules['stdlib'].kotlin.mapOf_eoa9s7$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$(37, 'left'), Kotlin.modules['stdlib'].kotlin.to_l1ob02$(38, 'up'), Kotlin.modules['stdlib'].kotlin.to_l1ob02$(39, 'right'), Kotlin.modules['stdlib'].kotlin.to_l1ob02$(32, 'spacebar')]);
              var buttonElements = document.querySelectorAll('[data-bind]');
              tmp$1 = buttonElements.length - 1;
              for (var i = 0; i <= tmp$1; i++) {
                var buttonElement = (tmp$2 = buttonElements[i]) != null ? tmp$2 : Kotlin.throwNPE();
                var keyShortcut = (tmp$3 = _.com.github.clemp6r.klogicalornot.View.object.getAttribute_t9mn69$(buttonElement, 'data-bind')) != null ? tmp$3 : Kotlin.throwNPE();
                var item = new _.com.github.clemp6r.klogicalornot.Button(buttonElement);
                this.buttons = Kotlin.modules['stdlib'].kotlin.plus_6099rs$(this.buttons, Kotlin.modules['stdlib'].kotlin.to_l1ob02$(keyShortcut, item));
                Kotlin.modules['stdlib'].kotlin.dom.onClick_g2lu80$(item.element, void 0, _.com.github.clemp6r.klogicalornot.View.View$f(item, this));
              }
              this.element.addEventListener('keydown', _.com.github.clemp6r.klogicalornot.View.View$f_0(keys, this, _.com.github.clemp6r.klogicalornot.View.object));
              this.element.addEventListener('keyup', _.com.github.clemp6r.klogicalornot.View.View$f_1(keys, this, _.com.github.clemp6r.klogicalornot.View.object));
              var normalModeButton = (tmp$4 = _.com.github.clemp6r.klogicalornot.View.object.getElement_61zpoe$('normal-mode')) != null ? tmp$4 : Kotlin.throwNPE();
              var hardcoreModeButton = (tmp$5 = _.com.github.clemp6r.klogicalornot.View.object.getElement_61zpoe$('hardcore-mode')) != null ? tmp$5 : Kotlin.throwNPE();
              Kotlin.modules['stdlib'].kotlin.dom.onClick_g2lu80$(normalModeButton, void 0, _.com.github.clemp6r.klogicalornot.View.View$f_2(normalModeButton, _.com.github.clemp6r.klogicalornot.View.object, hardcoreModeButton, this));
              Kotlin.modules['stdlib'].kotlin.dom.onClick_g2lu80$(hardcoreModeButton, void 0, _.com.github.clemp6r.klogicalornot.View.View$f_3(hardcoreModeButton, _.com.github.clemp6r.klogicalornot.View.object, normalModeButton, this));
            }, /** @lends _.com.github.clemp6r.klogicalornot.View.prototype */ {
              publishButtonData: function (button) {
                var tmp$0;
                var event = _.com.github.clemp6r.klogicalornot.View.object.getAttribute_t9mn69$(button.element, 'data-event');
                if (Kotlin.equals(event, 'view:selectAnswer')) {
                  var answer = (tmp$0 = _.com.github.clemp6r.klogicalornot.View.object.getAttribute_t9mn69$(button.element, 'data-event-data')) != null ? tmp$0 : Kotlin.throwNPE();
                  this.game.onSelectAnswer_61zpoe$(answer);
                }
                 else if (Kotlin.equals(event, 'view:newRound')) {
                  this.game.onNewRound();
                }
              }
            }, /** @lends _.com.github.clemp6r.klogicalornot.View */ {
              View$f: function (item, this$View) {
                return function (it) {
                  this$View.publishButtonData(item);
                };
              },
              View$f_0: function (keys, this$View, this$View$) {
                return function (event) {
                  var tmp$0;
                  var keyName = keys.get_za3rmp$(event.which);
                  if (keyName != null) {
                    var button = (tmp$0 = this$View.buttons.get_za3rmp$(keyName)) != null ? tmp$0 : Kotlin.throwNPE();
                    this$View$.addClass_t9mn69$(button.element, 'active');
                    event.preventDefault();
                  }
                };
              },
              View$f_1: function (keys, this$View, this$View$) {
                return function (event) {
                  var tmp$0;
                  var keyName = keys.get_za3rmp$(event.which);
                  if (keyName != null) {
                    var button = (tmp$0 = this$View.buttons.get_za3rmp$(keyName)) != null ? tmp$0 : Kotlin.throwNPE();
                    this$View$.removeClass_t9mn69$(button.element, 'active');
                    this$View.publishButtonData(button);
                    event.preventDefault();
                  }
                };
              },
              View$f_2: function (normalModeButton, this$View$, hardcoreModeButton, this$View) {
                return function (it) {
                  if (!this$View$.hasClass_t9mn69$(normalModeButton, 'active')) {
                    this$View$.addClass_t9mn69$(normalModeButton, 'active');
                    this$View$.removeClass_t9mn69$(hardcoreModeButton, 'active');
                    this$View.game.onNormalMode();
                  }
                };
              },
              View$f_3: function (hardcoreModeButton, this$View$, normalModeButton, this$View) {
                return function (it) {
                  if (!this$View$.hasClass_t9mn69$(hardcoreModeButton, 'active')) {
                    this$View$.addClass_t9mn69$(hardcoreModeButton, 'active');
                    this$View$.removeClass_t9mn69$(normalModeButton, 'active');
                    this$View.game.onHardcoreMode();
                  }
                };
              },
              object_initializer$: function () {
                return Kotlin.createObject(null, null, {
                  setHtml_puj7f4$: function (selector, value) {
                    var element = this.getElement_61zpoe$(selector);
                    element != null ? (element.innerHTML = value) : null;
                  },
                  addClass_puj7f4$: function (selector, className) {
                    this.addClass_t9mn69$(this.getElement_61zpoe$(selector), className);
                  },
                  addClass_t9mn69$: function (element, className) {
                    var tmp$0;
                    (tmp$0 = element != null ? element.classList : null) != null ? tmp$0.add(className) : null;
                  },
                  removeClass_puj7f4$: function (selector, className) {
                    var element = this.getElement_61zpoe$(selector);
                    this.removeClass_t9mn69$(element, className);
                  },
                  removeClass_t9mn69$: function (element, className) {
                    var tmp$0;
                    (tmp$0 = element != null ? element.classList : null) != null ? tmp$0.remove(className) : null;
                  },
                  getElement_61zpoe$: function (selector) {
                    var element = document.getElementById('bind-' + selector);
                    if (element == null) {
                      element = document.querySelector('selector');
                    }
                    return element;
                  },
                  setAttrs_wlbtzh$: function (selector, attrs) {
                    var element = this.getElement_61zpoe$(selector);
                    var tmp$0;
                    tmp$0 = Kotlin.modules['stdlib'].kotlin.iterator_acfufl$(attrs);
                    while (tmp$0.hasNext()) {
                      var element_0 = tmp$0.next();
                      element != null ? element.setAttribute(element_0.key, element_0.value) : null;
                    }
                    return element;
                  },
                  getAttribute_t9mn69$: function (element, name) {
                    return element.getAttribute(name);
                  },
                  hasClass_t9mn69$: function (element, className) {
                    return element.classList.contains(className);
                  }
                });
              }
            }),
            GamePlay: Kotlin.createClass(null, function (duration, timer, shuffleAnswers, gaps) {
              this.duration = duration;
              this.timer = timer;
              this.shuffleAnswers = shuffleAnswers;
              this.gaps = gaps;
            }),
            model: Kotlin.definePackage(function () {
              this.gamePlays = Kotlin.modules['stdlib'].kotlin.mapOf_eoa9s7$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$(_.com.github.clemp6r.klogicalornot.GameMode.object.NORMAL, new _.com.github.clemp6r.klogicalornot.GamePlay(15, true, true, new _.com.github.clemp6r.klogicalornot.model.Gaps(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([15, 15, 15]), Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([0, 0, 0])))), Kotlin.modules['stdlib'].kotlin.to_l1ob02$(_.com.github.clemp6r.klogicalornot.GameMode.object.HARDCODE, new _.com.github.clemp6r.klogicalornot.GamePlay(15, true, false, new _.com.github.clemp6r.klogicalornot.model.Gaps(Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([1, 2, 3]), Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([3, 2, 1]))))]);
              this.FPS = 60;
            }, /** @lends _.com.github.clemp6r.klogicalornot.model */ {
              Gaps: Kotlin.createClass(null, function (winning, losing) {
                this.winning = winning;
                this.losing = losing;
              }),
              Question: Kotlin.createClass(null, function (label, answers) {
                this.label = label;
                this.answers = answers;
              }, /** @lends _.com.github.clemp6r.klogicalornot.model.Question.prototype */ {
                component1: function () {
                  return this.label;
                },
                component2: function () {
                  return this.answers;
                },
                copy_1scim7$: function (label, answers) {
                  return new _.com.github.clemp6r.klogicalornot.model.Question(label === void 0 ? this.label : label, answers === void 0 ? this.answers : answers);
                },
                toString: function () {
                  return 'Question(label=' + Kotlin.toString(this.label) + (', answers=' + Kotlin.toString(this.answers)) + ')';
                },
                hashCode: function () {
                  var result = 0;
                  result = result * 31 + Kotlin.hashCode(this.label) | 0;
                  result = result * 31 + Kotlin.hashCode(this.answers) | 0;
                  return result;
                },
                equals_za3rmp$: function (other) {
                  return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.label, other.label) && Kotlin.equals(this.answers, other.answers)))));
                }
              }),
              Round: Kotlin.createClass(null, function (questions, taunts, gameMode, game) {
                var tmp$0;
                this.questions = questions;
                this.taunts = taunts;
                this.gameMode = gameMode;
                this.game = game;
                this.status = _.com.github.clemp6r.klogicalornot.model.RoundStatus.object.READY;
                this.taunt = null;
                this.gamePlay = (tmp$0 = _.com.github.clemp6r.klogicalornot.model.gamePlays.get_za3rmp$(this.gameMode)) != null ? tmp$0 : Kotlin.throwNPE();
                this.score = Kotlin.modules['stdlib'].kotlin.emptyList();
                this.currentQuestion = null;
                this.lifeBar = 100.0;
                this.lifeBarState = null;
                this.animateId_ior9di$ = null;
                this.config_je7gno$ = new _.com.github.clemp6r.klogicalornot.model.Config(this.gamePlay);
                this.setLifeBarHp(this.config_je7gno$.maxValue);
                this.setTaunt(new _.com.github.clemp6r.klogicalornot.model.Taunt(_.com.github.clemp6r.klogicalornot.model.TauntType.object.NICE, "So, what's the result of..."));
                this.setRandomQuestion();
                this.animate();
              }, /** @lends _.com.github.clemp6r.klogicalornot.model.Round.prototype */ {
                animate: function () {
                  var tmp$0, tmp$1, tmp$2;
                  if (this.status === _.com.github.clemp6r.klogicalornot.model.RoundStatus.object.GAME_OVER)
                    return;
                  if (this.status === _.com.github.clemp6r.klogicalornot.model.RoundStatus.object.PLAYING) {
                    if (this.config_je7gno$.iteration >= this.config_je7gno$.totalIterations) {
                      this.setLifeBarHp(0.0);
                      this.stop_6taknv$(true);
                      return;
                    }
                    var easingValue = this.ease(this.config_je7gno$.iteration, this.config_je7gno$.minValue, this.config_je7gno$.maxValue, this.config_je7gno$.totalIterations);
                    this.setLifeBarHp(this.config_je7gno$.maxValue - easingValue);
                    if (this.config_je7gno$.timer) {
                      tmp$0 = this.config_je7gno$, tmp$1 = tmp$0.iteration, tmp$2 = tmp$1, tmp$0.iteration = tmp$1 + 1, tmp$2;
                    }
                  }
                  this.animateId_ior9di$ = window.requestAnimationFrame(_.com.github.clemp6r.klogicalornot.model.Round.animate$f(this));
                },
                ease: function (currentIteration, startValue, changeInValue, total) {
                  return -changeInValue * (currentIteration / total) * (currentIteration / total - 2) + startValue;
                },
                setQuestion: function (question) {
                  var tmp$0;
                  if (this.gamePlay.shuffleAnswers) {
                    tmp$0 = _.com.github.clemp6r.klogicalornot.model.shuffle_fvq2g0$(question.answers);
                  }
                   else {
                    tmp$0 = question.answers;
                  }
                  var answers = tmp$0;
                  var shuffleQuestion = question.copy_1scim7$(void 0, answers);
                  this.currentQuestion = shuffleQuestion;
                  this.game.onNewQuestion_inaamw$(shuffleQuestion);
                  return shuffleQuestion;
                },
                setRandomQuestion: function () {
                  var question = Kotlin.modules['stdlib'].kotlin.first_fvq2g0$(_.com.github.clemp6r.klogicalornot.model.shuffle_fvq2g0$(this.questions));
                  this.setQuestion(question);
                },
                setTaunt: function (taunt) {
                  this.taunt = taunt;
                  this.game.onNewTaunt_rypni4$(taunt);
                },
                setLifeBarHp: function (hp) {
                  this.lifeBar = hp;
                  this.updateLifeBarState();
                  this.game.onUpdateLifeBar_mx4ult$(hp);
                },
                updateLifeBarState: function () {
                  var tmp$0;
                  if (this.lifeBar > 50) {
                    tmp$0 = _.com.github.clemp6r.klogicalornot.LifeBarState.object.NORMAL;
                  }
                   else if (this.lifeBar > 20) {
                    tmp$0 = _.com.github.clemp6r.klogicalornot.LifeBarState.object.LOW;
                  }
                   else {
                    tmp$0 = _.com.github.clemp6r.klogicalornot.LifeBarState.object.CRITICAL;
                  }
                  var state = tmp$0;
                  if (this.lifeBarState !== state) {
                    this.lifeBarState = state;
                    this.game.onUpdateLifeBarState_n0yrqf$(state);
                  }
                },
                submitAnswer_61zpoe$: function (answer) {
                  var tmp$0;
                  if (this.status === _.com.github.clemp6r.klogicalornot.model.RoundStatus.object.GAME_OVER)
                    return;
                  this.status = _.com.github.clemp6r.klogicalornot.model.RoundStatus.object.PLAYING;
                  if (eval(((tmp$0 = this.currentQuestion) != null ? tmp$0 : Kotlin.throwNPE()).label) == eval(answer)) {
                    this.riseLifeBar();
                    this.score = Kotlin.modules['stdlib'].kotlin.plus_21gqn$(this.score, true);
                    this.setRandomTaunt(_.com.github.clemp6r.klogicalornot.model.TauntType.object.NICE);
                  }
                   else {
                    this.dropLifebar();
                    this.score = Kotlin.modules['stdlib'].kotlin.plus_21gqn$(this.score, false);
                    this.setRandomTaunt(_.com.github.clemp6r.klogicalornot.model.TauntType.object.MEAN);
                  }
                  if (Kotlin.modules['stdlib'].kotlin.isNotEmpty_4m3c68$(this.questions)) {
                    this.setRandomQuestion();
                  }
                   else {
                    this.stop_6taknv$(true);
                  }
                },
                setRandomTaunt: function (type) {
                  var $receiver = this.taunts;
                  var destination = new Kotlin.ArrayList();
                  var tmp$0;
                  tmp$0 = $receiver.iterator();
                  while (tmp$0.hasNext()) {
                    var element = tmp$0.next();
                    if (element.tauntType === type) {
                      destination.add_za3rmp$(element);
                    }
                  }
                  var taunt = Kotlin.modules['stdlib'].kotlin.first_fvq2g0$(_.com.github.clemp6r.klogicalornot.model.shuffle_fvq2g0$(destination));
                  this.setTaunt(taunt);
                },
                riseLifeBar: function () {
                  var tmp$0;
                  var complexity = _.com.github.clemp6r.klogicalornot.model.Round.object.getQuestionComplexity_61zpoe$(((tmp$0 = this.currentQuestion) != null ? tmp$0 : Kotlin.throwNPE()).label);
                  var gap = this.gamePlay.gaps.winning.get_za3lpa$(complexity) * _.com.github.clemp6r.klogicalornot.model.FPS;
                  this.config_je7gno$.iteration = Math.max(this.config_je7gno$.iteration - gap, 0);
                },
                dropLifebar: function () {
                  var tmp$0;
                  var complexity = _.com.github.clemp6r.klogicalornot.model.Round.object.getQuestionComplexity_61zpoe$(((tmp$0 = this.currentQuestion) != null ? tmp$0 : Kotlin.throwNPE()).label);
                  var gap = this.gamePlay.gaps.losing.get_za3lpa$(complexity) * _.com.github.clemp6r.klogicalornot.model.FPS;
                  this.config_je7gno$.iteration = Math.min(this.config_je7gno$.iteration + gap, this.config_je7gno$.totalIterations);
                },
                stop_6taknv$: function (notify) {
                  var tmp$0;
                  if (notify === void 0)
                    notify = false;
                  this.status = _.com.github.clemp6r.klogicalornot.model.RoundStatus.object.GAME_OVER;
                  this.cancelAnimationFrame((tmp$0 = this.animateId_ior9di$) != null ? tmp$0 : Kotlin.throwNPE());
                  if (notify) {
                    this.game.onGameOver_k7jmfm$(this.score);
                  }
                },
                cancelAnimationFrame: function (animateId) {
                  window.cancelAnimationFrame(animateId);
                }
              }, /** @lends _.com.github.clemp6r.klogicalornot.model.Round */ {
                animate$f: function (this$Round) {
                  return function (it) {
                    this$Round.animate();
                  };
                },
                object_initializer$: function () {
                  return Kotlin.createObject(null, null, {
                    getQuestionComplexity_61zpoe$: function (question) {
                      var tmp$0;
                      var length = question.length;
                      if (length >= 15) {
                        tmp$0 = 2;
                      }
                       else if (length >= 10) {
                        tmp$0 = 1;
                      }
                       else {
                        tmp$0 = 0;
                      }
                      return tmp$0;
                    }
                  });
                }
              }),
              RoundStatus: Kotlin.createEnumClass(function () {
                return [Kotlin.Enum];
              }, function $fun() {
                $fun.baseInitializer.call(this);
              }, function () {
                return {
                  READY: new _.com.github.clemp6r.klogicalornot.model.RoundStatus(),
                  PLAYING: new _.com.github.clemp6r.klogicalornot.model.RoundStatus(),
                  GAME_OVER: new _.com.github.clemp6r.klogicalornot.model.RoundStatus()
                };
              }),
              Config: Kotlin.createClass(null, function (gamePlay) {
                this.timer = gamePlay.timer;
                this.minValue = 0.0;
                this.maxValue = 100.0;
                this.iteration = 0;
                this.totalIterations = gamePlay.duration * _.com.github.clemp6r.klogicalornot.model.FPS;
              }),
              shuffle_fvq2g0$: function ($receiver) {
                if ($receiver.isEmpty() || $receiver.size === 1) {
                  return $receiver;
                }
                 else {
                  var index = Math.floor(Math.random() * $receiver.size);
                  var head = $receiver.get_za3lpa$(index);
                  var tail = Kotlin.modules['stdlib'].kotlin.plus_n5c7gi$(Kotlin.modules['stdlib'].kotlin.take_pjxt3m$($receiver, Math.max(0, index)), Kotlin.modules['stdlib'].kotlin.drop_pjxt3m$($receiver, Math.max(index + 1)));
                  return Kotlin.modules['stdlib'].kotlin.plus_n5c7gi$(Kotlin.modules['stdlib'].kotlin.listOf_za3rmp$(head), _.com.github.clemp6r.klogicalornot.model.shuffle_fvq2g0$(tail));
                }
              },
              TauntType: Kotlin.createEnumClass(function () {
                return [Kotlin.Enum];
              }, function $fun() {
                $fun.baseInitializer.call(this);
              }, function () {
                return {
                  NICE: new _.com.github.clemp6r.klogicalornot.model.TauntType(),
                  MEAN: new _.com.github.clemp6r.klogicalornot.model.TauntType()
                };
              }),
              Taunt: Kotlin.createClass(null, function (tauntType, message) {
                this.tauntType = tauntType;
                this.message = message;
              })
            })
          })
        })
      })
    })
  });
  Kotlin.defineModule('klogicalornot', _);
  _.com.github.clemp6r.klogicalornot.main_kand9s$([]);
}(Kotlin));
