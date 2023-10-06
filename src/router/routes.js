import Landing from "@/views/Landing";
import Results from "@/views/Results";
import FullInfo from "@/views/FullInfo";
export default [
  {
    path: "/",
    name: "home",
    component: Landing
  },
  {
    path: "/results",
    name: "results",
    component: Results
  },
  {
    path: "/full_info/:id",
    name: "full_info",
    component: FullInfo
  }
];
