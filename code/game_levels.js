var GAME_LEVELS = [
  ["                                                                                ",
   "                                                           xx                   ",
   "  y   y y y   yy                                            x                   ",
   "  y   y y y    y                           o         o      x                   ",
   "  y   y y y    y                                            x                   ",
   "  y   y y y    y                        xxxxxxx     xxx  x  x                   ",
   "  yyy  y  yyy yyy                      xyyyyyyyx         x  x                   ",
   "                                      xyyyyyyyyyx        x  x                   ",
   "                                     xyyyyyyyyyyyx     xxx  x                   ",
   "                            o    xxx xyy!!yyy!!yyx       x       o          xx  ",
   "                                     xyy!!yyy!!yyx       x                   x  ",
   "                           xxx       xyyyyyyyyyyyx       x  xxxxxxxxx        x  ",
   "                                 o   xyyyyyxyyyyyx     xxx!!xx      xx       x  ",
   "  xx                                  xyyyyxyyyyx        xxxx        xx      x  ",
   "  x               o             xxx    xyyyyyyyx    o                        x  ",
   "  x        o                           xyx!!!xyx                o            $  ",
   "  x              xxx                   xxx!!!xxx   xxx                       $  ",
   "  x       xxx           xxxxxxx           !!!            xxx  xx  xx  xxxxxxxx  ",
   "  x  @                  x     x           !!!            x x          x         ",
   "  xxxxx                 q     x!!!!!!!!!!!!!!!!!!!!!!!!!!x x!!!!!!!!!!x         ",
   "      x                 q     x!!!!!!!!!!!!!!!!!!!!!!!!!!x x!!!!!!!!!!x         ",
   "      xxxxxxxxxxxxxqqqqqq     xxxxxxxx!!!!!!!!!!!!xxxxxxxx xxx!!!!!!xxx         ",
   "                                     xxxxxxxxxxxxxx          xxxxxxxx           ",
   "                                                                                "],
   ["                                                                                ",
    "                                                                                ",
    "  y   y y y   yyy                                                               ",
    "  y   y y y     y                                                               ",
    "  y   y y y    y                                                              x ",
    "  y   y y y   y                             x                                 x ",
    "  yyy  y  yyy yyy                           x!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!x ",
    "                                            x!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!x ",
    "                    x                       xxxxxxxxxxxxxxxxxxxxxxxxxx!xx!xx!xx ",
    "                    x                                                 v  v  v x ",
    "  x                 x               xxqq                                      x ",
    "  x!!!!!!!!!!!!!!!!!x    xxxx                                    xxxx         x ",
    "  x!!!!!!!!!!!!!!!!!x                      qq qq qq qq xx        oox          x ",
    "  xxxxxx!xxxx!xxxx!xx                                              x          x ",
    "  x     v    v    v                                              xxx          x ",
    "  x       o     o                     o                            x          $ ",
    "  x                           o                                    x          $ ",
    "  x                                                                xxxxxxxxxxxx ",
    "  x @               xbbx     x     xq     xq                       x            ",
    "  xxxxxxxxxxxxxxxxxxxxxxx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!xbbx!!!x            ",
    "                        x!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!x            ",
    "                        xxxxxxxxxx!!!!!!!!!!!!xxxxxxxxxxxx!!!!!!xxxx            ",
    "                                 xxxxxxxxxxxxxx          xxxxxxxx               ",
    "                                                                                "],
    ["                  x      x              |                                      ",
     "                  x      x                     x                               ",
     "  y   y y y   yyy x      x                     x                               ",
     "  y   y y y     y x    @ x                     x                               ",
     "  y   y y y    yy x   xxxx                |    x                               ",
     "  y   y y y     y x=  x  x o                 o x                               ",
     "  yyy  y  yyy yyy x   x  x   =  x      |       x                               ",
     "                  x = x!!x      xxxxx|     xxxxx                               ",
     "  xxxxxxxxxxxxxxxxx   x!!x      x              x                               ",
     "  x     =      o  x   x!!x=     x     xxxx   o x                               ",
     "  x  |            x = x!!x      x              xxxxxxxxxxxxxxxxxxxxxxxxxx      ",
     "  x     o     |   x   x!!x      xxxxx      xxxxx                        x      ",
     "  x        = o    x=  xxxx    = x         |                             x      ",
     "  x o    |                      x o                                     x      ",
     "  x                             x    | =                       =        x      ",
     "  xxqqxxqqxxxqqqxxxxxxxxxxxxbbxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx      xxxxx  ",
     "  x   =                               =                                   xxx  ",
     "  x                                                     =                  xx  ",
     "  x                                                                 =      ox  ",
     "  x                                          =                             ox  ",
     "  $        =              =        o                                       xx  ",
     "  $                                                                       xxx  ",
     "!!xxxx   xqx    xqxxqqx   xqq    xqqxxx    xxqq      xxqqx   xxxxx xxxxxxxxxx!!",
     "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"],
     ["!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
      "!yxyxyxyxyxyxyxyxyxyxyxyxyxy!",
      "!x                         x!",
      "!y                         y!",
      "!x  x                   x  x!",
      "!y  y    x x xxx x x    y  y!",
      "!x       x!x x!x x!x       x!",
      "!y        x  x!x x!x       y!",
      "!x        x  xxx xxx       x!",
      "!y  x                   x  y!",
      "!x  y                   y  x!",
      "!y  y                   y  y!",
      "!x  y         @         y  x!",
      "!y     x   x xxx xx  x     y!",
      "!x     x!x!x  x  x x!x     x!",
      "!y     x!x!x  x  x x!x     y!",
      "!x  x  xxxxx xxx x  xx  x  x!",
      "!y  y                   y  y!",
      "!x                         x!",
      "!y                         y!",
      "!xyxyxyxyxyxyxyxyxyxyxyxyxyx!",
      "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"],
];

if (typeof module != "undefined" && module.exports)
  module.exports = GAME_LEVELS;
