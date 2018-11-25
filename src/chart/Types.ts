import {PlotData} from "plotly.js";

interface Device {
  "id": number;
  "device_model": string;
  "device_type": string;
  "user_id": number;
  "system_version": string;
}

interface Plot {
  x: number[];
  y: number[];
  type: string;
  name: string;
  mode: string;
}

export interface HitsData {
  plots: PlotData[];
}
