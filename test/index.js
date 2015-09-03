/* globals counter */
var readFile = require('fs').readFile;
var assert = require('assert');
var exec = require('child_process').exec;

exec('node peter-piper.js', function(error, stdout, stderr) {
    if (error) {
        throw error;
    }
    if (stdout !== "There are 36 P's in Peter Piper.") {
        // Try to provide helpful error messages.
        readFile('./peter-piper.js', "utf-8", function(err, value) {
            if (err) throw err;

            eval(value);

            assert(counter, "Counter should contain the number of P's in Peter Piper.");

            if (counter == 8) {
                assert(false, "There are more than 8 P's in Peter Piper. Are you counting upper and lowercase P's?");
            }

            if (counter == 28) {
                assert(false, "There are more than 28 P's in Peter Piper. Are you counting upper and lowercase P's?");
            }

            if (counter !== 36) {
                assert.equal(false, "That's not the correct number of P's in Peter Piper");
            }
            console.log("All tests pass!")
        });
    }
    else {
        console.log("All tests pass!");
    }
});
