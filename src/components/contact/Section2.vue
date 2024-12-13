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
                    <input class="input" type="text" placeholder="Your Name"  name="name">
                    <input class="input" type="email" placeholder="Your Email" name="email">
                </div>

                <div class="container-flex">
                    <input class="input" type="text" placeholder="Tittle" name="tittle">
                </div>

                <div class="container-flex">
                    <textarea class="input" placeholder="Your Comment" name="message" rows="10"/>
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
    align-content: center;
    align-items: center;
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
    display: flex;
    gap: 2vmax;
}
.forms {
    margin-top: 1vmax;
    display: grid;
    gap: 1.5vmax;
}
 .input {
     width: 100%;
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
 .input:hover, .input:focus {
    box-shadow: 0 0 0 2px #669FF3;
    border-color: #669FF3;
}

 .input:focus + .name {
    color: #669FF3;
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
        padding: 0 5%;
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
    .container-flex {
        flex-wrap: wrap;
    }
    .input {
        font-size: 1.5vmax;
    }

}
</style>