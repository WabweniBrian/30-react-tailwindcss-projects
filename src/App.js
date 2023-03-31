import { Routes, Route } from "react-router-dom";
import Accordion from "./projects/accordion/Index";
import Cart from "./projects/addToCart/Index";
import Birthdayreminder from "./projects/birthdayReminder/Index";
import Pagination from "./projects/pagination/Index";
import Counter from "./projects/counter/Index";
import FirebaseCrud from "./projects/crudWithFirebase/Index";
import ReactCrud from "./projects/reactCRUD/Index";
import FirebaseAuth from "./projects/firebaseAuthentication/Index";
import FormValidation from "./projects/formValidation/Index";
import GithubJobs from "./projects/githubJobs/Index";
import GithubUsers from "./projects/githubUsersSearch/Index";
import GroceryBud from "./projects/groceryBud/Index";
import LoginAuth0 from "./projects/loginAuth0/Index";
import LoremIpsumgenerator from "./projects/loremIpsumGenerator/Index";
import MenuFilter from "./projects/menuFilter/Index";
import MovieApp from "./projects/movieApp/Index";
import PhotoGallery from "./projects/photoGallery/Index";
import QuizApp from "./projects/quizApp/Index";
import RandomQuotes from "./projects/randomQuotes/Index";
import RecipeApp from "./projects/recipeApp/Index";
import ResponsiveNavbar from "./projects/responsiveNavbar/Index";
import Reviews from "./projects/reviewsApp/Index";
import SidebarModal from "./projects/sidebar&Modal/Index";
import Slider from "./projects/slider/Index";
import StripeMenu from "./projects/stripeMenu/Index";
import Tabs from "./projects/tabs/Index";
import ThemeToggle from "./projects/themeToggle/Index";
import TodoApp from "./projects/todoApp/Index";
import Tours from "./projects/tours/Index";
import WeatherApp from "./projects/weatherApp/Index";
import Home from "./Home";
import NotFound from "./NotFound";
import AutoScrollToTop from "./AutoScrollToTop";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/birthday-reminder" exact element={<Birthdayreminder />} />
        <Route path="/tours" exact element={<Tours />} />
        <Route path="/reviews" exact element={<Reviews />} />
        <Route path="/accordion" exact element={<Accordion />} />
        <Route path="/menu-filter" exact element={<MenuFilter />} />
        <Route path="/tabs" exact element={<Tabs />} />
        <Route path="/slider" exact element={<Slider />} />
        <Route
          path="/lorem-generator"
          exact
          element={<LoremIpsumgenerator />}
        />
        <Route path="/grocery-bud" exact element={<GroceryBud />} />
        <Route path="/navbar" exact element={<ResponsiveNavbar />} />
        <Route path="/sidebar-modal" exact element={<SidebarModal />} />
        <Route path="/stripe-menu" exact element={<StripeMenu />} />
        <Route path="/cart" exact element={<Cart />} />
        <Route path="/counter" exact element={<Counter />} />
        <Route path="/theme-toggle" exact element={<ThemeToggle />} />
        <Route path="/todo-app" exact element={<TodoApp />} />
        <Route path="/form-validation" exact element={<FormValidation />} />
        <Route path="/quiz-app" exact element={<QuizApp />} />
        <Route path="/random-quotes" exact element={<RandomQuotes />} />
        <Route path="/photo-gallery" exact element={<PhotoGallery />} />
        <Route path="/firebase-auth" exact element={<FirebaseAuth />} />
        <Route path="/react-crud" exact element={<ReactCrud />} />
        <Route path="/firebase-crud" exact element={<FirebaseCrud />} />
        <Route path="/login" exact element={<LoginAuth0 />} />
        <Route path="/github-users" exact element={<GithubUsers />} />
        <Route path="/github-jobs" exact element={<GithubJobs />} />
        <Route path="/pagination" exact element={<Pagination />} />
        <Route path="/movie-app" exact element={<MovieApp />} />
        <Route path="/weather-app" exact element={<WeatherApp />} />
        <Route path="/recipe-app" exact element={<RecipeApp />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <AutoScrollToTop />
    </>
  );
};

export default App;
