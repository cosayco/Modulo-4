function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
  
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

class signup_normal {
  constructor(email, password) {
    this.email = email,
    this.password = password
  }

  showData() {
    let aleatorio = parseInt(Math.random() * 10000)
    let user = "Usuario" + aleatorio
    alert(`Bienvenido ${user}\nEmail: ${this.email} Contraseña: ${this.password}`)
  }
}

class signup_vip extends signup_normal {
  constructor(user, email, password) {
    super(email, password)
    this.user = user
  }

  showData() {
    alert(`Bienvenido ${this.user}\nEmail: ${this.email} Contraseña: ${this.password}`)
  }
}

function signupNormal(){
  let email = document.getElementById("email1").value
  let password = document.getElementById("password1").value
  const normal = new signup_normal(email, password)
  normal.showData()
}

function signupVIP(){
  let user = document.getElementById("user2").value
  let email = document.getElementById("email2").value
  let password = document.getElementById("password2").value
  const vip = new signup_vip(user, email, password)
  vip.showData()
}
