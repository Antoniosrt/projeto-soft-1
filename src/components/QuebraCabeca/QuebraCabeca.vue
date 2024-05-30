<template>
    <div ref="p5Container"></div>
</template>

<script>
  import p5 from "p5";
  import imgUrl from '@/assets/choochoobot.png';
export default {
    name: "QuebraCabeca",
    data() {
      return {
        sketchInstance: null,
      };
    },
    mounted() {
      this.sketchInstance = new p5(this.sketch, this.$refs.p5Container);
    },
    beforeDestroy() {
      if (this.sketchInstance) {
        this.sketchInstance.remove();
      }
    },
    methods: {
      sketch(p) {
        let source;
        let tiles = [];
        let cols = 4;
        let rows = 4;
        let w, h;
        let board = [];
  
        p.preload = function() {
            //pega a imagem do quebra cabeça no assets e carrega
          source = p.loadImage(
            imgUrl
          );
        };
  
        p.setup = function() {
            console.log('wqweqwe')
          p.createCanvas(400, 400);
          w = p.width / cols;
          h = p.height / rows;
  
          for (let i = 0; i < cols; i++) {
            for (let j = 0; j < rows; j++) {
              let x = i * w;
              let y = j * h;
              let img = p.createImage(w, h);
              img.copy(source, x, y, w, h, 0, 0, w, h);
              let index = i + j * cols;
              board.push(index);
              let tile = new Tile(index, img);
              tiles.push(tile);
            }
          }
  
          tiles.pop();
          board.pop();
          board.push(-1);
  
          simpleShuffle(board);
        };
  
        p.draw = function() {
          p.background(0);
          for (let i = 0; i < cols; i++) {
            for (let j = 0; j < rows; j++) {
              let index = i + j * cols;
              let x = i * w;
              let y = j * h;
              let tileIndex = board[index];
              if (tileIndex > -1) {
                let img = tiles[tileIndex].img;
                p.image(img, x, y, w, h);
              }
            }
          }
  
          for (let i = 0; i < cols; i++) {
            for (let j = 0; j < rows; j++) {
              let x = i * w;
              let y = j * h;
              p.strokeWeight(2);
              p.noFill();
              p.rect(x, y, w, h);
            }
          }
  
          if (isSolved()) {
            console.log("SOLVED");
          }
        };
  
        p.mousePressed = function() {
          let i = p.floor(p.mouseX / w);
          let j = p.floor(p.mouseY / h);
          move(i, j, board);
        };
  
        function swap(i, j, arr) {
          let temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
        }
  
        function randomMove(arr) {
          let r1 = p.floor(p.random(cols));
          let r2 = p.floor(p.random(rows));
          move(r1, r2, arr);
        }
  
        function simpleShuffle(arr) {
          for (let i = 0; i < 100000; i++) {
            randomMove(arr);
          }
        }
  
        function move(i, j, arr) {
          let blank = findBlank();
          let blankCol = blank % cols;
          let blankRow = p.floor(blank / rows);
  
          if (isNeighbor(i, j, blankCol, blankRow)) {
            swap(blank, i + j * cols, arr);
          }
        }
  
        function isNeighbor(i, j, x, y) {
          if (i !== x && j !== y) {
            return false;
          }
  
          if (p.abs(i - x) == 1 || p.abs(j - y) == 1) {
            return true;
          }
          return false;
        }
  
        function findBlank() {
          for (let i = 0; i < board.length; i++) {
            if (board[i] == -1) return i;
          }
        }
  
        function isSolved() {
          for (let i = 0; i < board.length - 1; i++) {
            if (board[i] !== tiles[i].index) {
              return false;
            }
          }
          return true;
        }
  
        class Tile {
          constructor(index, img) {
            this.index = index;
            this.img = img;
          }
        }
      },
    },
  };
  </script>

<style scoped>
div {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}
</style>