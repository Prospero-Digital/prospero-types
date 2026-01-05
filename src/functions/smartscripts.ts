import { Bundle } from '../bundles';
import { Smartscript } from '../smartscripts';

type GeneratedFields = Partial<Smartscript & Bundle> & {
  render: string;
};

type SmartscriptsCopyRequest = GeneratedFields & {
  docId: string;
};

type SmartscriptsCopyResponse = {
  id: string;
};

type SmartscriptsImportRequest = {
  docId: string;
  bundleId?: string;
};

export {
  SmartscriptsCopyRequest,
  SmartscriptsCopyResponse,
  SmartscriptsImportRequest,
};
