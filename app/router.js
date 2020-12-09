import React from "react";
import {Route, Switch} from "react-router-dom";
import UserProfile from "../components/UserProfile/userProfile";
import AboutCart from "../components/aboutCart/abouteCart";
import SettingUser from "../components/UserProfile/userProfileProperty/settingUser";
import Rewards from "../components/UserProfile/userProfileProperty/Revards";
import MyRouts from "../components/UserProfile/userProfileProperty/meRouts";
import MyQuests from "../components/UserProfile/userProfileProperty/myQuests";
import Favorites from "../components/UserProfile/userProfileProperty/favorites";
import EditRoutes from "../components/UserProfile/userProfileProperty/EditRouts/EditRouts";
import Header from "../components/header/header";
import Search from "../components/search/search";
import Map from "../components/map/map";
import Events from "../components/events/events";
import Objects from "../components/objects/objects";
import TurExcursion from "../components/TurExcursion/turExcursion";
import Quests from "../components/Quests/Quests";
import UsefulInfo from "../components/usefulInfo/usefulInfo";
import Feedback from "../components/feedback/feedback";
import MassageRating from "../components/feedback/massageRating/massageRating";
import DetailQuests from "../components/Quests/detailQuests/detailQuests";
import DetailEvents from "../components/events/ detailEvents/detailsEvents";
import DetailStructureExcursion from "../components/TurExcursion/ditailStructureExcursion/ditailStructureExcursion";
import DetailObjects from "../components/objects/detailObjects/detailObjects";
import DetailPageRouter from "../components/selectRouting/detailPageRouter/detailPageRouter";
import SelectRouting from "../components/selectRouting/selectRouting";

export function Router() {
    return (
        <div className="routers">
            <Switch>
                <Route exact path='/' render={() => <Header/>}/>
                <Route exact path='/user/profile' render={() => <UserProfile/>}/>
                <Route path='/about' render={() => <AboutCart/>}/>
                <Route path='/user/settings' render={() => <SettingUser/>}/>
                <Route path='/user/rewards' render={() => <Rewards/>}/>
                <Route path='/user/routes' render={() => <MyRouts/>}/>
                <Route path='/user/quests' render={() => <MyQuests/>}/>
                <Route path='/user/favorites' render={() => <Favorites/>}/>
                <Route path='/user/profile/routes/update/:id?' render={() => <EditRoutes/>}/>
                <Route path='/search' render={() => <Search/>}/>
                <Route path='/map' render={() => <Map/>}/>
                <Route path='/about' render={() => <AboutCart/>}/>
                <Route exact path='/routes' render={() => <SelectRouting/>}/>
                <Route exact path='/events' render={() => <Events/>}/>
                <Route exact path='/objects' render={() => <Objects/>}/>
                <Route exact path='/tours' render={() => <TurExcursion/>}/>
                <Route exact path='/quests' render={() => <Quests/>}/>
                <Route path='/useful' render={() => <UsefulInfo/>}/>
                <Route path='/feedback' render={() => <Feedback/>}/>
                <Route path='/messages&ratings' render={() => <MassageRating/>}/>
                <Route path='/quests/:id?' render={() => <DetailQuests/>}/>
                <Route path='/events/:id?' render={() => <DetailEvents/>}/>
                <Route path='/tours/:id?' render={() => <DetailStructureExcursion/>}/>
                <Route path='/objects/:id?' render={() => <DetailObjects/>}/>
                <Route path='/routes/:id?' render={() => <DetailPageRouter/>}/>

            </Switch>

        </div>
    );
}

export default Router;
