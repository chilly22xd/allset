<script setup>

</script>

<template>
    <div class="main">
        <div class="container">
            <h1 data-aos="fade-down">Get in Touch</h1>
            <p data-aos="fade-down">We’re ready to answer your questions and help you choose the perfect cleaning service for your
                needs. Reach out to us, and we’ll get back to you as soon as possible.</p>
            <form class="forms" action="" method="post">
                <div class="container-flex">
                    <div class="containers-inputs">
                        <input class="input" type="text"  name="name">
                        <span class="name" data-aos="fade-up">Your Name</span>
                    </div>
                    <div class="containers-inputs">
                        <input class="input" type="email" name="email">
                        <span class="name" data-aos="fade-up">Your Email</span>
                    </div>
                </div>
                <div class="containers-inputs">
                    <input class="input" type="text" name="tittle">
                    <span class="name" data-aos="fade-up">Tittle</span>
                </div>
                <div class="containers-inputs">
                    <textarea  name="message" cols="30" rows="10"></textarea>
                    <span class="name" data-aos="fade-up">Comment</span>
                </div>
                <div class="container-flex">
                    <input class="btn-submit" type="submit" value="Send">
                </div>
            </form>
        </div>
    </div>
</template>

<style scoped>
.main {
    background-color: whitesmoke;
    padding: 3vmax 11% 3vmax 11%;
}
.container {
    display: grid;
}
.container h1 {
    font-size: 3vmax;
    text-align: center;
    margin: 0;
    font-family: 'Arial Black', serif;
    color: #3C394E;
}
.container p {
    font-size: 1.5vmax;
    text-align: center;
}
.container-flex {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2vmax;
}

.forms {
    margin-top: 3vmax;
    display: grid;
    gap: 2vmax;
}
.containers-inputs {
    position: relative;
}
.containers-inputs .input {
    width: 100%;
    position: relative;
    font-weight: normal;
    font-family: "Century Gothic", serif;
    font-size: 1.5rem;
    background-color: #f1f1f1;
    outline: none;
    border: solid 1.5px grey;
    border-radius: 1rem;
    padding: 0.5rem;
    transition: 0.3s ease-in-out;
    box-shadow: 0 0 0 5px transparent;
}
.containers-inputs .input:hover,.containers-inputs .input:focus {
    box-shadow: 0 0 0 2px #669FF3;
    border-color: #669FF3;
}

.containers-inputs .input:focus + .name {
    color: #669FF3;
}
.containers-inputs .name {
    position: absolute;
    color: #3C394E;
    font-family: "Century Gothic", serif;
    font-size: 1.2rem;
    font-weight: bold;
    left: 0;
    top: 0;
    transition: 0.3s ease-in-out;
    pointer-events: none;
}

 .containers-inputs .input:focus + .name,.containers-inputs .input:valid + .name {
    transform: translateY(-1.3rem) translateX(0.8rem) scale(0.90);
    transition: 0.3s ease-in-out;
}
.btn-submit {
    width: 15vmax;
    height: 4.5vmax;
    border: none;
    border-radius: 1vmax;
    background-color: #669FF3;
    color: white;
    font-size: 1.5vmax;
}
.btn-submit:hover {
    background-color: #3C394E;
}



@media (max-width: 768px) {
    .main {
        padding: 8% 5%;
    }
    .container {
        gap: 2vmax;
    }
    .container h1 {
        font-size: 3vmax;
    }
    .container p {
        font-size: 2vmax;
    }
    .container-flex{
        grid-template-columns: none;
    }
    .forms {
        align-items: center;
        justify-content: center;
    }
    .containers-inputs .input {
        width: 85%;
    }
}
</style>