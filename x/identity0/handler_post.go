package identity0

import (
	"github.com/6footgeek/identity0/x/identity0/keeper"
	"github.com/6footgeek/identity0/x/identity0/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func handleMsgCreateIdentity(ctx sdk.Context, k keeper.Keeper, msg *types.MsgCreateIdentity) (*sdk.Result, error) {
	k.CreateIdentity(ctx, *msg)

	return &sdk.Result{Events: ctx.EventManager().ABCIEvents()}, nil
}
