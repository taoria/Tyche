import Vue from "vue";
import Router from "vue-router";
import ElementUi from "element-ui";

//Page Com
import HelloWorld from "@/components/HelloWorld";
import CharacterSheet from "@/components/CharacterSheet";
import OverView from "@/components/OverView";
import Character from "@/components/Character";
import Rule from "@/components/Rule";
//Com

import IntField from "@/components/UICom/IntField";
import NumberRollers from "@/components/Sheet/NumberRollers";
import ButtonGroupDialog from "@/components/UICom/ButtonGroupDialog";
import axios from "axios";
import VueAxios from "vue-axios";
import StringField from "@/components/UICom/StringField";

Vue.use(Router);
Vue.use(ElementUi);
Vue.component("str-field", StringField);
Vue.component("button-group-dialog", ButtonGroupDialog);
Vue.component("int-field", IntField);
Vue.component("number-roller", NumberRollers);
Vue.use(VueAxios, axios);

export default new Router({
  routes: [
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
    }
  ]
});
