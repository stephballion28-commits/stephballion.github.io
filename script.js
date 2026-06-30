const message = `To my dearest, Cassandra 
\nToday was supposed to be our 3 years and 6 months. But, I let you go, and chose myself. Even so, this day will always remind me of us. How could I ever forget? This is where our story began, with a simple "yes" to being my girlfriend. Everything that followed became a memories I will always carry with me. 
\nI know sending you this letter might disturb your peace, and I'm sorry for hurting you when you just wanted to be loved by me. I just couldn't let these words stay unspoken. It still hurts knowing we're are not together right now, because I know my selfishness played a major part in losing us. I miss you, not just the idea of you, but you. I miss your presence, your care, and the comfort I always found in you. I miss the way we'd tell each other about our days, even the smallest moments that happened.
\nNo matter what happens, my heart will always finds its way back to us. It has always been you, sa dulo, sa gitna, at sa simula. I'm still holding on to the promises I made to you, because they came place that was genuine. I promise that I will become the best version of who I can be. The kind of person who can treat you the way you always deserved to be treated. And maybe, if you can give us another chance, I'll be lucky enough to have you back in my life. Sana kung pwede na, pwede pa.
\nMahal na mahal kita, Cass. As long as I am here, as long as heaven gives me the chance. Ibibigay ko sa'yo nang buong - buo ang aking pagmamahal.
\n\nLove, Steph`;


function showLetter() {
  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";

  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    letterBox.style.display = "block";
    let i = 0;

    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
      }
    }

    typeWriter();
  }, 600);
}