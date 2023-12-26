<template>
  <div>
    <header>
      <nav
        class="navbar bg-dark navbar-expand-sm bg-body-tertiary border-bottom border-body fixed-top"
        data-bs-theme="dark"
      >
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Company name</a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">회원관리</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">주문관리</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">배송관리</a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">주문관리</a></li>
                  <li><a class="dropdown-item" href="#">배송관리</a></li>
                  <li><hr class="dropdown-divider" /></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" aria-disabled="true">Disabled</a>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </header>
    <main>
      <div class="container py-4">
        <RouterViwe></RouterViwe>
      </div>
    </main>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.navbar {
  width: 1700px;
  margin: 0 auto;
  height: 80px; /* 상단의 높이에 따라 조절하세요 */
}
/* 576px에서 991px 사이일 때의 스타일 */
@media (min-width: 576px) and (max-width: 991px) {
  .navbar {
    width: 80%; /* 또는 다른 원하는 값 */
  }
}
</style>
