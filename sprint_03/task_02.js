const product = function() {
    return [].reduce.call(arguments, function(res, elem) {
      return res * elem;
    }, this.product);
};

const contextObj = { // your code }

const getProduct = // product function that is called in the context of an contextObj 
                     // with two additional parameters