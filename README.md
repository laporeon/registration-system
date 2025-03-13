<h1 align="center"> 📋 Registration System

![node](https://img.shields.io/static/v1?label=node&message=22.14.0&color=2d3748&logo=node.js&style=flat-square)
![typescript](https://img.shields.io/static/v1?label=typescript&message=5.8.2&color=2d3748&logo=typescript&style=flat-square)
[![eslint](https://img.shields.io/badge/eslint-9.22.0-4b32c3?style=flat-square&logo=eslint)](https://eslint.org/)
[![MIT License](https://img.shields.io/badge/license-MIT-green?style=flat-square)](https://github.com/laporeon/registration-system/blob/main/LICENSE.md)

</h1>

## Table of Contents

- [About](#about)
- [Requirements](#requirements)
- [Installing](#installing)
- [Usage](#usage)
- [Preview](#preview)

## About

A challenge adapted from this [post](https://docs.google.com/document/d/1MffuoflNa0xOqfAGNQ-p_iSIy3xbjsb_dpEt8lk_1sc/edit?tab=t.0) I found at Twitter. It consists on a simple registration system via CLI, where you can register a new user based on their answers to predefined questions and then store their data at a custom `.txt` file at `/data/users/` folder already created.

**Features and functionalities:**

- ZOD to validate answers.
- Register a new user.
- List registered users.
- Register new questions.
- Delete an existing question.
- Search user by name.
- A predefined .txt file with 04 mandatory questions, since they can't be hard coded. All questions, including new ones, must be read by the file and printed at terminal.
- New questions will be automatically written at the existing file and their ID will be automatically assigned based on the last index.

## Requirements:

- [NodeJS](https://nodejs.org/en) v.22 or higher

If you use [NVM](https://github.com/nvm-sh/nvm), just run `nvm use` inside of the root folder.

## **Installing:**

Yarn:

```bash
$ yarn
```

NPM:

```bash
$ npm i
```

## Usage

### **Starting**

```bash
$ npm start
```

## Preview

![registration-system](https://github.com/user-attachments/assets/6a396c6b-3468-4dc3-a7c7-b85ea94aa697)

[⬆ Back to the top](#--registration-system)
