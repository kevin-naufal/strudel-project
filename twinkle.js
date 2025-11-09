// Twinkle Twinkle Little Star - Simple Piano (Strudel)
setcpm(2)

// Setiap huruf merepresentasikan satu beat
$: note("c4 c4 g4 g4 a4 a4 g4 ~ \
         f4 f4 e4 e4 d4 d4 c4 ~ \
         g4 g4 f4 f4 e4 e4 d4 ~ \
         g4 g4 f4 f4 e4 e4 d4 ~ \
         c4 c4 g4 g4 a4 a4 g4 ~ \
         f4 f4 e4 e4 d4 d4 c4 ~")
   .sound("piano")
   .sustain(0.5)
   .velocity(0.9)