import { createStore } from 'vuex'
import ReportModules from "@/store/modules/ReportModules";
import TemplateModules from '@/store/modules/TemplateReportModules'

// Create a new store instance.
export const store = createStore({
    modules: {ReportModules, TemplateModules}
})