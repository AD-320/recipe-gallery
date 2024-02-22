# Recipe Gallery

The Recipe Gallery is a simple React application designed to showcase a curated list of recipes in a visually appealing card layout. This project focuses on demonstrating the ability to render static data in React, utilizing list rendering techniques without involving state management or interactivity.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (https://nodejs.org/)
- npm (comes with Node.js) 

### Installation

Clone the repository to your local machine:
```
https://github.com/AD-320/recipe-gallery.git
```

Navigate to the project directory:
```
cd recipe-gallery
```
Install the necessary dependencies:
```
npm install
```
Start the development server:

```
npm start
```
Open your web browser and visit `http://localhost:3000` to view the application.

## Design Choices

### Layout
The Recipe Gallery utilizes a card layout to present each recipe, making it easy for users to browse through the collection. This choice was made to enhance the visual appeal and to allow easy scanning of recipes.

### Styling
CSS Flexbox and Grid were employed to ensure a responsive layout, accommodating various screen sizes and orientations. A neutral color palette was chosen to keep the focus on the recipe images and details, with subtle hover effects, added to recipe cards for a more interactive feel.

### Data Structure
Recipes are stored in a static array, with each recipe represented as an object containing properties for `id`, `title`, `ingredients`, and `image`. This structure simplifies the rendering logic and is scalable for future enhancements like fetching data from an API.


## License

This project is licensed under the MIT License - see the LICENSE file for details.
