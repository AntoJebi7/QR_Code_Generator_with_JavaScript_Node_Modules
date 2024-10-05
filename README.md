## QR Code Generator with Auto Deletion

This project is a **Node.js-based CLI application** that allows users to generate a QR code for any URL or message, save it as a PNG image, and store the inputted URL/message in a text file. The QR code image is automatically deleted after 10 seconds to ensure space efficiency.

## Features

- **User Input**: Prompts the user to enter a URL or message.
- **QR Code Generation**: Creates a QR code using the `qr-image` library.
- **File Handling**: Saves the QR code image as `qr_code.png` and the input in `URL.txt`.
- **Auto Deletion**: Deletes the QR code image after 10 seconds.

## Prerequisites

- Node.js installed on your machine.
- Basic knowledge of command-line interface (CLI).

## Installation

Clone the repository and install the required dependencies:

```bash
# Clone the repository
git clone <repository-url>

# Navigate to the project directory
cd qr-code-generator

# Install dependencies
npm install

# inquirer
Module Purpose: inquirer is a popular Node.js library used to create interactive command-line interfaces (CLI). It allows developers to prompt users for inputs in the terminal.
How it’s used: In this project, inquirer.prompt() is used to ask the user for a URL or a message that will be converted into a QR code.
# Installation
npm install inquirer
or
yarn add inquirer

# qr-image
Module Purpose: qr-image is a library that generates QR codes in image formats such as PNG or SVG.
How it’s used: After the user enters the URL or message, the input is passed to qr-image to generate a QR code in PNG format, which is saved to the file system.
# Installing
npm install qr-image

# fs (File System)
Module Purpose: fs is the built-in Node.js module for interacting with the file system, allowing reading and writing of files.
How it’s used:
The fs.createWriteStream() function is used to save the generated QR code image to a file.
fs.writeFile() saves the user's input (the URL or message) to a text file (URL.txt).
fs.unlink() is used to delete the QR code image (qr_code.png) after 10 seconds.
