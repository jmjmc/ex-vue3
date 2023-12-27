<template>
  <div class="container">
    <div class="sidebar">
      <div class="col-md-4 fixed-nav">
        <ul class="nav flex-column">
          <li class="nav-item md-1">
            <a class="nav-link active" aria-current="page" href="#">
              <svg class="bi" style="width: 1rem; height: 10rem">
                <use xlink:href="#house-fill" />
              </svg>
              회원관리
            </a>
          </li>
          <li class="nav-item md-1">
            <a class="nav-link" href="#">
              <svg class="bi" style="width: 1rem; height: 5rem">
                <use xlink:href="#file-earmark" />
              </svg>
              주문관리
            </a>
          </li>
          <li class="nav-item md-1">
            <svg class="bi" style="width: 1rem; height: 5rem"><use xlink:href="#cart" /></svg>
            배송관리
            <ul class="nav flex-column ml-3">
              <li class="nav-item">
                <RouterLink class="nav-link" active-class="active" to="/about">
                  <svg class="bi" style="width: 1rem; height: 5rem"><use xlink:href="#cart" /></svg>
                  배송처리
                </RouterLink>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <svg class="bi" style="width: 1rem; height: 5rem"><use xlink:href="#cart" /></svg>
                  배송설정
                </a>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" active-class="active" to="/clim">
              <svg class="bi" style="width: 1rem; height: 10rem"><use xlink:href="#people" /></svg>
              클라임관리
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
    <main>
      <div class="container py-4">
        <RouterViwe></RouterViwe>
      </div>
    </main>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.fixed-nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 200px; /* 원하는 너비로 조절 */
  height: 100vh; /* 전체 높이로 조절 */
  background-color: #f8f9fa; /* 배경색 지정 */
  padding-top: 20px; /* 상단 여백 조절 */
}
</style>
