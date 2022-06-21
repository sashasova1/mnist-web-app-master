import { Component, OnInit } from '@angular/core';
import * as tf from '@tensorflow/tfjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  model: tf.Model;
  predictions: any;

  ngOnInit(): void {
    this.loadModel();
  }

  async loadModel() {
    this.model = await tf.loadModel('/assets/modeldir/model.json');
  }

  async predict(imageData: ImageData) {
    tf.tidy(() => {
      const img = tf.fromPixels(imageData)
        .resizeBilinear([28, 28]) // shrink data to 28x28 -> dims - [28, 28, 3]
        .mean(2) // (avg of rgb dimenson [28, 28, 3]-> grayscale [28, 28])
        .toFloat() // explicit declaration, mean already implicitly converts to float
        .reshape([1, 28, 28, 1]);

      const output = this.model.predict(img) as any;

      this.predictions = Array.from(output.dataSync());
    });
  }
}
