function greeting() {
      let today = new Date();
      let hours = today.getHours();
  
      if (hours >= 0 && hours < 12) {
          return "Hello, Good Morning!";
      } else if (hours >= 12 && hours < 18) {
          return "Hello, Good Afternoon!";
      } else {
          return "Hello, Good Evening!";
      }
  }
  
  document.getElementById("greeting").innerHTML = greeting();
  