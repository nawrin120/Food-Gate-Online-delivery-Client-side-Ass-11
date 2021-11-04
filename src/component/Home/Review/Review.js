import React from 'react';
import './Review.css'

const Review = () => {
    return (
        <div className='review-container'>
            <h2>Customers Review</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                    <div class="card border-info mb-3" >
                        <h3 class="card-header">Umaima Uwsha</h3>
                        <div class="card-body">

                            <p class="card-text">The food was absolutely wonderful, from preparation to presentation, very pleasing. We especially enjoyed the special bar drinks, the cucumber/cilantro infused vodka martini and the K&P Aquarium was great .</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div class="card border-info mb-3" >
                        <h3 class="card-header">Hayder Ali</h3>
                        <div class="card-body">

                            <p class="card-text">Lovely lunch today. Ordered the crab cake sandwich and was pleased by the quality of the crab cake, as well as the nicely toasted roll, thick slices of ripe avocado, and crisp hot bacon which accompanied it.  </p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div class="card border-info mb-3" >
                        <h3 class="card-header">Sultana Razia</h3>
                        <div class="card-body">

                            <p class="card-text">They are great for any meal, but I had breakfast there this time. Such a selection including creamed chipped beef, biscuits and gravy, potato pancakes, waffles, pancakes, egg scrambles, eggs benedict, </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;