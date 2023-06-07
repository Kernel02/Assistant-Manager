const arrowIcon = $("#arrowDown");
const employeeForm = $("#employee-form");
const roleForm = $("#role-form");
const menuForm = $("#menu-item-form");
const dropdown = $(".dropdown-trigger");
const loginForm = $("#login-form");
const signupForm = $("#signup-form");
const logoutBtn = $("#logout-btn");

const loginHandler = async (event) => {
  event.preventDefault();

  const email = event.target[0].value;
  const password = event.target[1].value;

  if (email && password) {
    // Send a POST request to the API endpoint
    const response = await fetch("/login/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert(response.statusText);
    }
  }
};

const signupHandler = async (event) => {
  event.preventDefault();
  console.log("Hello");

  const email = event.target[0].value;
  const password = event.target[1].value;

  if (email && password) {
    console.log("yes");
    const response = await fetch("/signup", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert(response.statusText);
    }
  }
};

const logoutHandler = async () => {
  const response = await fetch("login/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/");
  } else {
    alert(response.statusText);
  }
};

const employeeHandler = async (event) => {
  event.preventDefault();

  const first_name = event.target[0].value;
  const last_name = event.target[1].value;
  const role_id = event.target[3].value;
  const phone = event.target[4].value;
  const email = event.target[5].value;
  const address = event.target[6].value;

  const response = await fetch("/employee", {
    method: "POST",
    body: JSON.stringify({
      first_name,
      last_name,
      phone,
      email,
      address,
      role_id,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

const roleHandler = async (event) => {
  event.preventDefault();
  const title = event.target[0].value;
  const description = event.target[1].value;
  const salary = event.target[2].value;

  console.log(title, description, salary);

  const response = await fetch("/employee/role", {
    method: "POST",
    body: JSON.stringify({
      title,
      description,
      salary,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

const menuHandler = async (event) => {
  event.preventDefault();

  const name = event.target[0].value;
  const description = event.target[1].value;
  const price = event.target[2].value;
  const calory = event.target[3].value;

  const response = await fetch("/menu", {
    method: "POST",
    body: JSON.stringify({
      name,
      description,
      price,
      calory,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

$(document).ready(function () {
  $(".parallax").parallax();
  $(".dropdown-trigger").dropdown();
  $("ul.tabs").tabs();
  $("select").formSelect();
  $(".carousel").carousel();
});

function changeArrow() {
  if (arrowIcon[0].id === "arrowDown") {
    $(arrowIcon[0]).text("arrow_drop_up");
    $(arrowIcon[0]).attr("id", "arrowUp");
  } else {
    $(arrowIcon[0]).text("arrow_drop_down");
    $(arrowIcon[0]).attr("id", "arrowDown");
  }
}

dropdown.on("click", changeArrow);
employeeForm.on("submit", employeeHandler);
roleForm.on("submit", roleHandler);
menuForm.on("submit", menuHandler);
loginForm.on("submit", loginHandler);
signupForm.on("submit", signupHandler);
logoutBtn.on("click", logoutHandler);
