import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer class="bg-dark text-center text-white mt-5">
                <div class="container p-4">
                    <section class="mb-4">
                    <a class="btn btn-outline-light btn-floating m-1" href="https://www.facebook.com/" target="blank" role="button"
                        ><i class="fab fa-facebook-f"></i
                    ></a>

                    <a class="btn btn-outline-light btn-floating m-1" href="https://twitter.com/" target="blank" role="button"
                        ><i class="fab fa-twitter"></i
                    ></a>

                   
                    <a class="btn btn-outline-light btn-floating m-1" href="https://www.google.com/" target="blank" role="button"
                        ><i class="fab fa-google"></i
                    ></a>

                    <a class="btn btn-outline-light btn-floating m-1" href="https://www.instagram.com/" target="blank" role="button"
                        ><i class="fab fa-instagram"></i
                    ></a>

                    <a class="btn btn-outline-light btn-floating m-1" href="https://www.linkedin.com/" target="blank" role="button"
                        ><i class="fab fa-linkedin-in"></i
                    ></a>

                    <a class="btn btn-outline-light btn-floating m-1" href="https://github.com/" target="blank" role="button"
                        ><i class="fab fa-github"></i
                    ></a>
                    </section>

                    <section>
                    <form>
                        <div class="row d-flex justify-content-center">
                        <div class="col-auto">
                            <p class="pt-2">
                            <strong>Sign up for our newsletter</strong>
                            </p>
                        </div>

                        <div class="col-md-5 col-12">
                            <div class="form-outline form-white mb-4">
                            <input type="email" class="form-control"/>
                            <label class="form-label pt-3">Email address</label>
                            </div>
                        </div>

                        <div class="col-auto">
                            <button type="submit" class="btn btn-outline-light mb-4">
                                Subscribe
                            </button>
                        </div>
                        </div>
                    </form>
                    </section>

                    <section class="mb-4">
                        <p>
                            An auto mechanic performs maintenance, diagnostic testing, repairs, and inspections of small trucks and cars. They work on engines, drive belts, transmissions, and electronic systems such as steering, brakes, and accident-avoidance systems.
                        </p>
                    </section>

                   
                </div>

                <div class="text-center p-3">
                    © 2021 Copyright : Genius Car Mechanic
                    <a class="text-white text-decoration-none" href="#"></a>
                </div>
                </footer>
        </div>
    );
};

export default Footer;