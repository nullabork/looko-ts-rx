import { UserInterfaceStore } from "./UserInterfaceStore";
import { AccessKeyStore } from './AccessKeyStore';
import { AccountStore } from './AccountStore';
import { WorkspaceStore } from './WorkspaceStore';

export const stores = {
  userInterfaceStore: new UserInterfaceStore(),
  accessKeyStore: new AccessKeyStore(),
  accountStore: new AccountStore(),
  workspaceStore: new WorkspaceStore()
}