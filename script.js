// ========================================
// AMBIL ELEMEN DARI HTML
// ========================================

const slider = document.getElementById("slider");

const giftButton = document.getElementById("giftButton");

const envelopeButton =
    document.getElementById("envelopeButton");

const next1 = document.getElementById("next1");

const next2 = document.getElementById("next2");

const next3 = document.getElementById("next3");

const finishButton =
    document.getElementById("finishButton");

const restartButton =
    document.getElementById("restartButton");

const music =
    document.getElementById("backgroundMusic");


// ========================================
// PENGATURAN SLIDE
// ========================================

let currentSlide = 0;

const totalSlides = 7;


// ========================================
// FUNGSI PINDAH SLIDE
// ========================================

function goToSlide(number) {

    if (number < 0) {
        number = 0;
    }

    if (number > totalSlides - 1) {
        number = totalSlides - 1;
    }

    currentSlide = number;

    slider.style.transform =
        "translateX(-" + (number * 100) + "vw)";


    // Setiap pindah slide,
    // kertas surat kembali ke atas

    const papers =
        document.querySelectorAll(".paper");

    papers.forEach(function(paper) {

        paper.scrollTop = 0;

    });

}


// ========================================
// FUNGSI MENJALANKAN MUSIK
// ========================================

function playMusic() {

    if (!music) {

        console.log(
            "Audio tidak ditemukan!"
        );

        return;

    }


    music.volume = 0.7;


    const promise =
        music.play();


    if (promise !== undefined) {

        promise
            .then(function() {

                console.log(
                    "Musik berhasil diputar."
                );

            })

        .catch(function(error) {

            console.log(
                "Musik gagal diputar:",
                error
            );

        });

    }

}


// ========================================
// KADO
// KLIK KADO → MUSIK + SLIDE 2
// ========================================

if (giftButton) {

    giftButton.addEventListener(
        "click",
        function() {

            console.log(
                "KADO DIKLIK"
            );


            // Mulai musik

            playMusic();


            // Animasi kado

            const gift =
                document.querySelector(
                    ".gift"
                );


            if (gift) {

                gift.style.transform =
                    "scale(1.15) rotate(5deg)";

            }


            // Pindah ke slide ulang tahun

            setTimeout(
                function() {

                    goToSlide(1);

                },
                600
            );

        }
    );

}


// ========================================
// AMPLOP
// KLIK AMPLOP → SURAT 1
// ========================================

if (envelopeButton) {

    envelopeButton.addEventListener(
        "click",
        function() {

            console.log(
                "AMPLOP DIKLIK"
            );


            // Animasi amplop

            const envelope =
                document.querySelector(
                    ".envelope"
                );


            if (envelope) {

                envelope.style.transform =
                    "translateY(-8px) scale(1.08)";

            }


            // Pindah ke surat pertama

            setTimeout(
                function() {

                    goToSlide(2);

                },
                500
            );

        }
    );

}


// ========================================
// SURAT 1 → SURAT 2
// ========================================

if (next1) {

    next1.addEventListener(
        "click",
        function() {

            goToSlide(3);

        }
    );

}


// ========================================
// SURAT 2 → SURAT 3
// ========================================

if (next2) {

    next2.addEventListener(
        "click",
        function() {

            goToSlide(4);

        }
    );

}


// ========================================
// SURAT 3 → SURAT 4
// ========================================

if (next3) {

    next3.addEventListener(
        "click",
        function() {

            goToSlide(5);

        }
    );

}


// ========================================
// SURAT 4 → ENDING
// ========================================

if (finishButton) {

    finishButton.addEventListener(
        "click",
        function() {

            goToSlide(6);

        }
    );

}


// ========================================
// ENDING → KEMBALI KE AWAL
// ========================================

if (restartButton) {

    restartButton.addEventListener(
        "click",
        function() {

            goToSlide(0);

        }
    );

}


// ========================================
// KEYBOARD
// PANAH KANAN / KIRI
// ========================================

document.addEventListener(
    "keydown",
    function(event) {


        // PANAH KANAN

        if (
            event.key ===
            "ArrowRight"
        ) {

            if (
                currentSlide <
                totalSlides - 1
            ) {

                goToSlide(
                    currentSlide + 1
                );

            }

        }


        // PANAH KIRI

        if (
            event.key ===
            "ArrowLeft"
        ) {

            if (
                currentSlide > 0
            ) {

                goToSlide(
                    currentSlide - 1
                );

            }

        }

    }
);


// ========================================
// SWIPE DI HP
// ========================================

let touchStartX = 0;

let touchEndX = 0;


document.addEventListener(
    "touchstart",
    function(event) {

        touchStartX =
            event.changedTouches[0].screenX;

    }
);


document.addEventListener(
    "touchend",
    function(event) {

        touchEndX =
            event.changedTouches[0].screenX;

        handleSwipe();

    }
);


function handleSwipe() {

    const distance =
        touchEndX - touchStartX;


    // Geser ke kiri
    // → slide berikutnya

    if (distance < -80) {

        if (
            currentSlide <
            totalSlides - 1
        ) {

            goToSlide(
                currentSlide + 1
            );

        }

    }


    // Geser ke kanan
    // → slide sebelumnya

    if (distance > 80) {

        if (
            currentSlide > 0
        ) {

            goToSlide(
                currentSlide - 1
            );

        }

    }

}


// ========================================
// CEK AUDIO
// ========================================

if (music) {

    music.volume = 0.7;

    console.log(
        "Audio ditemukan."
    );

} else {

    console.log(
        "Audio TIDAK ditemukan."
    );

}


// ========================================
// INFORMASI WEBSITE
// ========================================

console.log(
    "Birthday Web berhasil dijalankan."
);

console.log(
    "Slide saat ini:",
    currentSlide + 1
);