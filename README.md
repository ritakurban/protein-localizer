# Protein Localization Flask App
This Flask app uses a pre-trained Meta ESM model to predict the subcellular localization of a protein sequence. The app provides both tabular and graphical outputs of the predicted localization.

## Introduction to Protein Localization
Proteins are essential macromolecules that perform a wide variety of functions within cells. One important aspect of protein function is their subcellular localization, which refers to the specific location within a cell where the protein is most active or performs its function.

Determining the subcellular localization of a protein can provide important insights into its function and role in cellular processes. There are several experimental methods available for determining protein localization, but these can be time-consuming and costly. Computational methods, such as machine learning models, offer a more efficient and cost-effective approach to predicting protein localization.

## Model Overview
This Flask app uses the Meta ESM architecture. The ESM model is a deep learning model that is specifically designed for processing protein sequences. The model was trained on a large dataset of protein sequences with known subcellular localization, allowing it to learn patterns in the sequence that are associated with specific subcellular localizations.

The app takes a protein sequence as input and returns the predicted subcellular localization. The predictions are provided in both a tabular format and as a bar plot, making it easy to quickly understand the predicted localization.

## Installing Requirements and Running Flask
To run this Flask app, you will need to have Python 3.7 or higher installed.

1. Clone the repository or download the zip file and extract it.
2. Open a terminal window and navigate to the root directory of the project.
3. Create a virtual environment by running python3 -m venv env.
4. Activate the virtual environment by running source env/bin/activate.
5. Install the required packages by running `pip install -r requirements.txt`.
6. Start the Flask app by running `export FLASK_APP=app.py flask run`.
7. Once the app is running, you can access it in your web browser by going to http://localhost:5000.

## Model Availability
The pre-trained ESM model used in this app is available on Hugging Face at https://huggingface.co/ritakurban/ESM_protein_localization/tree/main. The app is also hosted at https://ritakurban.pythonanywhere.com/.