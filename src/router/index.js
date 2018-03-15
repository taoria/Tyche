import Vue from "vue";
import Router from "vue-router";
import ElementUi from "element-ui";

//Page Com
import Login from "@/components/Pages/Login";
import Register from "@/components/Pages/Register";
import CharacterSheet from "@/components/CharacterSheet";
import OverView from "@/components/OverView";
import Character from "@/components/Character";
import Rule from "@/components/Rule";

//Com
import ItemGroupDialog from "@/components/UICom/ItemGroupDialog";
import IntField from "@/components/UICom/IntField";
import NumberRollers from "@/components/Sheet/NumberRollers";
import ButtonGroupDialog from "@/components/UICom/ButtonGroupDialog";
import ParsingRule from "@/components/RuleMode/ParsingRule";
import StringField from "@/components/UICom/StringField";

import axios from "axios";

Vue.use(Router);
Vue.use(ElementUi);

Vue.component("str-field", StringField);
Vue.component("button-group-dialog", ButtonGroupDialog);
Vue.component("int-field", IntField);
Vue.component("number-roller", NumberRollers);
Vue.component("parsing-rule", ParsingRule);
Vue.component("item-dialog", ItemGroupDialog);
export default new Router({
  routes: [
    {
      path: "/User",
      redirect: to => {
          return "/Login"
      }
    },
    {
      path: "/",
      name: "OverView",
      component: OverView
    },
    {
      path: "/character",
      name: "Character",
      component: Character
    },
    {
      path: "/Rule",
      name: "Rule",
      component: Rule
    },
    {
      path: "/Login",
      name: "Login",
      component: Login
    },
    {
      path:"/Register",
      name:"Register",
      component:Register
    }
  ]
});
