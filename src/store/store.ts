import { createStore } from 'vuex'
import ReportModules from "@/store/modules/ReportModules";

// Create a new store instance.
export const store = createStore({
    modules: {ReportModules}
})