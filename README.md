aishoe
This project hosts a web application for classifying shoes into various categories such as Ballet Flat, Boat, Brogue, Clog, and Sneaker. The model is based on MobileNetV3 and has been trained on a synthetic bottle image dataset found on Kaggle.

Dataset
The dataset used for training can be found here: Shoes Classification Dataset | 13k Images | on Kaggle.

Model Architecture
The model is based on MobileNetV3, a lightweight convolutional neural network designed for mobile devices. The model was trained using PyTorch and later exported to the ONNX format. However, before converting the model to TensorFlow.js (TFJS), the activation functions HardSwish and HardSigmoid were manually adjusted due to exportation errors.

Model Workflow:
Training: The model was trained in PyTorch using the Kaggle dataset.
ONNX Export: The trained model was exported to the ONNX format.
Manual Adjustments: Activation functions HardSwish and HardSigmoid were modified manually to handle errors during export.
TFJS Conversion: The model was then converted to TensorFlow.js (TFJS) for deployment on the web.

Web Application
The web application allows users to upload an image of a bottle and receive predictions for the type of bottle. The interface is clean and minimalist, using basic CSS for styling and JavaScript for handling interactivity.

Features:
Image Upload: Users can upload images of bottles.
Prediction Display: The model provides predictions for five bottle categories: Ballet Flat, Boat, Brogue, Clog, and Sneaker.
Responsive Design: The site is designed to be mobile-friendly and features a modern, clean layout.

Installation
To run this project locally, follow these steps:

Clone the repository:```bash
git clone [https://michel033.github.io/aishoe/]
cd aishoe
