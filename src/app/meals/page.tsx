import Image from "next/image";
import MealSearchInput from "./components/MealSearchInput";


async function MealsPage({searchParams}: any) {


    const query = await searchParams;

    const fetchMeals = async () => {
        
        try {
            const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query.search}`)
            const data = await res.json();
            // setMeals(data.meals || [])
            return data.meals;
        } catch (error) {
            console.log(error);
            return [];
        }
    }


    const meals = await fetchMeals();


    return <div>
        <div>
            <div>
                <MealSearchInput />
            </div>
            <div className="grid">
                {
                    meals?.map((singleMeal: any, index: number) => {
                        return <div key={index}>
                            <div><Image width={641} height={641} src={singleMeal?.strMealThumb} alt={singleMeal?.strMeal} /></div>
                            <div>{singleMeal.strMeal}</div>
                        </div>
                    })
                }
            </div>
        </div>
    </div>
}

export default MealsPage
