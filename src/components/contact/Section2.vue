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
                    <div class="formField">
                        <input class="input" type="text"  name="name">
                        <span data-aos="fade-up">Your Name</span>
                    </div>
                    <div class="formField">
                        <input type="email" name="email">
                        <span data-aos="fade-up">Your Email</span>
                    </div>
                </div>
                <div class="formField">
                    <input type="text" name="tittle">
                    <span data-aos="fade-up">Tittle</span>
                </div>
                <div class="formField">
                    <textarea name="message" id="" cols="30" rows="10"></textarea>
                    <span data-aos="fade-up">Comment</span>
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

.formField {
    margin: 10px;
    position: relative;
}

.formField textarea {
    width: 100%;
    margin: 0;
    border-radius: 1vmax;
    padding: 1.1vmax;
    outline: none;
    border: solid 1.5px grey;
    background-color: #f1f1f1;
    color: #333;
    font-size: 1.6vmax;
    transition: 0.3s ease-in-out;
    box-shadow: 0 0 0 5px transparent;
}
.formField textarea:hover,
.formField textarea:focus {
    box-shadow: 0 0 0 2px #669FF3;
}

.formField textarea:focus + span,
.formField textarea:valid + span {
    transform: translateY(-2.2vmax) translateX(0.8vmax) scale(0.90);
}
.formField textarea:focus + span {
    color: #669FF3;
}

.formField input {
    width: 100%;
    padding: 10px 15px;
    outline: none;
    border: solid 1.5px grey;
    border-radius: 1.2vmax;
    background-color: #f1f1f1;
    color: #333;
    font-size: 1.6vmax;
    transition: 0.3s ease-in-out;
    box-shadow: 0 0 0 5px transparent;
}

.formField input:hover,
.formField input:focus {
    box-shadow: 0 0 0 2px #669FF3;
}

.formField span {
    position: absolute;
    left: 0;
    top: 0;
    padding: 8px 15px;
    color: #3C394E;
    font-size: 1.4vmax;
    font-weight: bold;
    transition: 0.3s ease-in-out;
    pointer-events: none;
}

.formField input:focus + span,
.formField input:valid + span {
    transform: translateY(-2.2vmax) translateX(0.8vmax) scale(0.90);
    transition: 0.3s ease-in-out;
}
.formField input:focus + span {
    color: #669FF3;
}


</style>