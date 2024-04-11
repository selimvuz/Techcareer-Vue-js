<template>
  <div class="container mt-5">
    <div id="programmingLanguagesCarousel" class="carousel slide" data-bs-ride="carousel" data-bs-interval="500">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#programmingLanguagesCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#programmingLanguagesCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#programmingLanguagesCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item">
          <img src="/images/java101.jpg" class="d-block w-100" alt="Java 101">
        </div>
        <div class="carousel-item active">
          <img src="/images/vuejs.png" class="d-block w-100" alt="Vue">
        </div>
        <div class="carousel-item">
          <img src="/images/react.png" class="d-block w-100" alt="React">
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#programmingLanguagesCarousel" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#programmingLanguagesCarousel" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
  </template>
  

<script>
export default {
  name: 'HomePage',
}
</script>

<style scoped>
.carousel-item img {
  height: 700px;
  object-fit: cover;
  width: 100%;
}
.carousel-control-prev-icon,
.carousel-control-next-icon {
  height: 40px;
  width: 40px;
  background-image: none;
}

/* Sol ok için özel stil */
.carousel-control-prev {
  justify-content: flex-start;
}

.carousel-control-prev-icon {
  background-image: url('left-arrow.svg');
}

.carousel-control-next {
  justify-content: flex-end;
}

.carousel-control-next-icon {
  background-image: url('right-arrow.svg');
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
  background-size: 100%, 100%;
  border-radius: 50%;
  background-color: #000;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
}

.carousel-control-prev-icon:after,
.carousel-control-next-icon:after {
  content: '>';
  font-size: 30px;
  color: white;
}

.carousel-control-prev-icon:after {
  content: '<';
}
</style>
