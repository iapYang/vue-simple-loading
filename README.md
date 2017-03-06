# vue-simple-loading

Thanks for [tobiasahlin/SpinKit](https://github.com/tobiasahlin/SpinKit). The css3 animation is copied from it.

All the things I do is built it as a vue component.

This project is built by vue 2.2.1, so you should update vue to at least version 2.

## Usage

1. ### NPM

   `npm install 'vue-loading' -D ` 

2. ### Import

   In your .vue files, use follow code to include it

   `import VueLoading from 'vue-loading';`

   Add it to components

   ```javascript
   components: {
     VueLoading,
   },
   ```

   Add it to the dom

   `<vue-loading></vue-loading>`

3. ### Add spinner props

   The loading style is defined by spinner.

   For now, there are 11 styles of loading.

   ```javascript
   spinners: [
     'rotating-plane',
     'double-bounce',
     'wave',
     'wandering-cubes',
     'pulse',
     'chasing-dots',
     'three-bounce',
     'circles',
     'cube-grid',
     'fading-circle',
     'folding-cube'
   ],
   ```

   [Check it](https://iapyang.github.io/vue-simple-loading/#/)

   Add the 'spinner' prop, e.g.

   `<vue-loading spinner="circles"></vue-loading>`

   ​