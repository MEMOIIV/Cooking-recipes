import axios from "axios";
import React, { useEffect, useState } from "react";
import HomeCss from "./Home.module.css";
import { Link } from "react-router-dom";

export default function Home() {
const [categories, setCategories] = useState(null);
const [nameFood, setNameFood] = useState([]);
const [saveName, setSaveName] = useState([]);
async function allFood() {
    const randomRecipes = [];
    for (let i = 0; i < 32; i++) {
    const response = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/random.php"
    );
    randomRecipes.push(response.data.meals[0]);
    }
    setTimeout(() => {
        setCategories(randomRecipes);
    }, 200);
}

async function getNameFood() {
    const { data } = await axios.get(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${saveName}`
    );
    setNameFood(data.meals);
}
async function saveNameFood(name) {
    setSaveName(name);
}
useEffect(() => {
    allFood();
    getNameFood();
}, []);

useEffect(() => {
    if (saveName) {
        getNameFood();
    }
}, [saveName]);

return (
    <>
    {categories == null ? (
        <>
        <div
            className={
            HomeCss.layer +
            " bg-success vh-100 overflow-hidden d-flex justify-content-center align-items-center position-fixed top-0 start-0 end-0 bottom-0 text-white"
            }
        >
            <i className="fa-solid fa-circle-notch fa-spin fa-4x"></i>
        </div>
        </>
    ) : (
        <>
        <section className="container my-5">
            <div className="row">
            <div className="col-md-8">
                <div>
                <h2>
                    Welcome to{" "}
                    <span className="text-success">The Recipe Nest</span>
                </h2>
                <p>
                    Get ready to spice up your kitchen adventures! Here, you'll
                    find a treasure trove of delicious recipes, cooking tips,
                    and culinary inspiration from around the world. Whether
                    you're a seasoned chef or just starting, our easy-to-follow
                    recipes and step-by-step guides are here to make cooking fun
                    and enjoyable.
                </p>
                <p>
                    Explore, cook, and share the joy of food with us. Let's
                    create something delicious today!
                </p>
                </div>
                {/* <div><input type="search" name="" id="" className="form-control w-75" /></div> */}
            </div>
            </div>
            <div className="row">
            {categories &&
                categories.map((meal, index) => (
                <div key={index} className="col-md-3 text-center">
                    <div
                    className="shadow-sm bg-body rounded-2 pb-4 my-2"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                    onClick={() => saveNameFood(meal.strMeal)}
                    >
                    <img
                        src={meal.strMealThumb}
                        className={HomeCss.imgHeight + " w-100 rounded-2"}
                        alt="meal"
                        onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "/img/Sorry.png";
                        }}
                    />
                    <h5>{meal.strMeal}</h5>
                    <div>
                        <h6 className="p-0 m-0">
                        Category: {meal.strCategory}
                        </h6>
                        <h6 className="p-0 my-2 mb-3">Area: {meal.strArea}</h6>
                    </div>
                    <Link to={meal.strYoutube} target="_blank">
                        <button className="btn btn-success">
                        Watch the recipe video
                        </button>
                    </Link>
                    </div>
                </div>
                ))}
            </div>
            {/* <!-- Modal --> */}
            {nameFood.map((name , index) => {
                const ingredients = [];
                for (let i = 1; i <= 20; i++) {
                const ingredient = name[`strIngredient${i}`];
                const measure = name[`strMeasure${i}`];
                if (ingredient && ingredient.trim() !== "" && measure && measure.trim() !== "") {
                    ingredients.push(`${measure} ${ingredient}`);
                }
                }
            return (
                <div key={index}>
                    <div
                    className="modal fade"
                    id="staticBackdrop"
                    data-bs-backdrop="static"
                    data-bs-keyboard="false"
                    tabIndex="-1"
                    aria-labelledby="staticBackdropLabel"
                    aria-hidden="true"
                    >
                    <div className="modal-dialog">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">
                            {name.strMeal}
                            </h1>
                            <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            <div><img src={name.strMealThumb} className="w-100 rounded-2"alt="food"onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "/img/Sorry.png";
                        }} /></div>
                        <h5 className="pt-3">Ingredients :</h5>
                        <div className="d-flex flex-wrap gap-2">
                            {ingredients.map((ingredient, index) => (
                                <button key={index} className="btn btn-outline-success btn-sm">
                                    {ingredient}
                                </button>
                            ))}
                        </div>
                        <h5 className="pt-3">Preparation Instructions :</h5>
                            <p>{name.strInstructions}</p>
                        </div>
                        <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-success"
                            data-bs-dismiss="modal"
                        >
                            Close
                        </button>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            );
            })}
        </section>
        </>
    )}
    </>
);
}
