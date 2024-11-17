<h1 align="center">Currency Converter</h1>

</br>

<!-- TABLE OF CONTENTS -->
<h2 id="table-of-contents"> :book: Table of Contents</h2>

<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#introduction"> ➤ Introduction</a></li>
    <li><a href="#tech-stack"> ➤ Tech stack</a></li>
    <li><a href="#app-structure"> ➤ Run app</a></li>
    <li><a href="#test"> ➤ Run test</a></li>
    <li><a href="#road-map"> ➤ Road Map</a></li>
  </ol>
</details>

![---------------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)

<!-- ABOUT THE PROJECT -->
<h2 id="introduction"> :pencil: Introduction</h2>

<p align="justify">

The Currency Converter is a web-based application that enables users to convert amounts between different currencies with live exchange rates. It provides an intuitive interface where users can select the source and target currencies, input an amount, and view the converted value in real-time. The application integrates live exchange rate data and includes a progress bar to indicate the frequency of rate updates. Additionally, the tool accounts for marked-up rates to display both true and adjusted amounts. Ideal for travelers, businesses, and individuals tracking currency fluctuations, the Currency Converter is designed for accuracy, ease of use, and seamless user experience. Error handling ensures users are notified of any issues with exchange rate retrieval, and inputs are validated for correctness.

</p>

<p align="center">
  <img src="/public/preview.png" alt="app structure" width="70%" height="70%">        
</p>

![---------------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)

<!-- Tech stack -->
<h2 id="tech-stack"> :books: Tech stack</h2>

The following open source techs are used in this project:

- <b>Base</b> <br>

  ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)

- <b>Code Consistency & Reliability</b> <br>

![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)
![React Query](https://img.shields.io/badge/-React%20Query-FF4154?style=for-the-badge&logo=react%20query&logoColor=white)

- <b>Testing tool</b> <br>
  ![Testing-Library](https://img.shields.io/badge/-TestingLibrary-%23E33332?style=for-the-badge&logo=testing-library&logoColor=white) ![Cypress](https://img.shields.io/badge/-cypress-%23E33332?style=for-the-badge&logo=cypress&logoColor=white) ![jest](https://img.shields.io/badge/-jest-%23E33332?style=for-the-badge&logo=jest&logoColor=white)

![---------------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)

<!-- App structure -->
<h2 id="app-structure"> :fork_and_knife: Run app </h2>

node version: v20.12.2

### Steps:

1. Git Clone this repo.
1. Run `yarn or npm install`
1. Run `yarn dev or npm run dev `
1. Visit `http://localhost:3000`

![---------------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)

<h2 id="test"> :floppy_disk: Test</h2>

### Unit & integration test (Jest, React Testing Library)

1. `yarn or npm install`
2. `yarn test or npm run test`

<p align="center">
  <img src="/public/test-result.png" alt="app structure" width="70%" height="70%">        
</p>

<!-- ### Cypress e2e test

1. `yarn or npm install`
2. `yarn cypress:open or npm run cypress:open`

<p align="center">
  <img src="/public/e2e-test.gif" alt="app structure" width="70%" height="70%">
</p> -->

![---------------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)

<h2 id="road-map"> 🗺️: Road-map</h2>

### Road map

1. Use React Hook Form with Zod Validation:

- Integrate React Hook Form for efficient form handling and validation, paired with Zod for schema-based form validation. This will provide flexibility to handle more complex questions, beyond simple radio buttons, ensuring data validation is robust and easy to maintain.

2. Implement TypeScript:

- Using TypeScript in production ensures a more reliable and maintainable codebase by catching potential bugs during development through its static type-checking. It improves developer productivity with better autocompletion, enhanced refactoring capabilities, and robust IDE support, which speeds up debugging and collaboration. TypeScript also helps maintain consistency in a growing codebase, making it scalable and easier to onboard new team members. Its compatibility with JavaScript ensures a smooth adoption process while leveraging type definitions for third-party libraries in production environments.
