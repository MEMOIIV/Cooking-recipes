import axios from "axios";
import React, { useEffect, useState } from "react";
export default function Search() {
    const nameFood = localStorage.getItem('nameFood')
    const [dataSearch , setDataSearch] = useState(null)

    async function searchFood () {
        const {data} = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${nameFood}`)
        setTimeout(() => {
            setDataSearch(data.meals)
        }, 200);
    }

    useEffect(() => {
        searchFood();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    
return (
    
<>
    {dataSearch == null ? (
        <>
        <div
            className={
            `   bg-success vh-100 overflow-hidden d-flex justify-content-center align-items-center 
                position-fixed top-0 start-0 end-0 bottom-0 text-white
            ` 
            }
        >
            <i className="fa-solid fa-circle-notch fa-spin fa-4x"></i>
        </div>
        </>
    ) : (
    
        dataSearch.map((meals , index)=>(
            
            <section key={index} className="container my-5 py-5">
            <div className="row">
                <div className="col-md-4">
                    <div>
                        <img src={meals.strMealThumb} className="w-100 rounded-2" alt="food" onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "/img/Sorry.png";
                        }} />
                    </div>
                </div>
                <div className="col-md-8">
                    <div>
                        <h3>{meals.strMeal}</h3>
                        <h5>Ingredients :</h5>
                        <div className="d-flex flex-wrap">
                                {Array.from({ length: 20 }).map(( _ , i ) => {
                                    const ingredient = meals[`strIngredient${i + 1}`];
                                    const measure = meals[`strMeasure${i + 1}`];
                                            
                                    if (ingredient && ingredient.trim() !== "" && measure && measure.trim() !== "") {
                                        return (
                                            <button key={i} className="btn btn-outline-success m-1">
                                                {ingredient} - {measure}
                                            </button>
                                        );
                                }
                                    return null;  // إذا كانت القيمة فارغة أو غير موجودة لا تعرض شيئًا
                            })}
                        </div>
                        <h5 className="pt-3">Preparation Instructions : </h5>
                        <p>{meals.strInstructions}</p>
                    </div>
                </div>
            </div>
        </section>
        ))

        
    )}
</>
)}
