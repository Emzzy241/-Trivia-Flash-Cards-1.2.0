// the business Logic file

// making use of ES6 classes

export class TriviaService {
    // a static method that takes in userDifficulty as the only parameter
    static getMeTriviaQuestions(userDifficulty) {

        // returning a fetch with my endpoint url in it
        return fetch(`https://opentdb.com/api.php?amount=15&category=12&difficulty=${userDifficulty}&type=multiple`)

            // a ffetch returns a promise; a .then() can be called on it
            .then(function (triviaResponse) {
                // after making the API call; I check to see if triviaResponse has an "ok" property in it. And that will tell me whether I had a successful response or not

                if (!triviaResponse.ok) {
                    // the Error is an object in JavaScript for errors
                    throw Error(triviaResponse.statusText);
                }
                // else return the triviaResponse and call the .json() method on it
                return triviaResponse.json();

            })
            // making use of a .catch block that handles the Error I threw above
            // note the difference; a .catch block was used and not a catch
            // the .catch cannot take in an anonymous function while a catch can

            .catch(function (triviaError) {
                return triviaError;
            })

    }
}