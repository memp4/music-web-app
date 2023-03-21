<div class="main center">
  <h1>Welcome to music app</h1>
  <form method="POST" class="form center">
    <input type="text" placeholder="Login" />
    <input type="text" placeholder="Password" />
    <button>Log in</button>
  </form>
</div>

<style lang="scss">
  .center {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .main {
    margin-top: 200px;
  }

  .form {
    gap: 20px;
  }
  input {
    font-size: 24px;
    padding: 4px 6px;
  }
  button {
    font-size: 24px;
  }
</style>
