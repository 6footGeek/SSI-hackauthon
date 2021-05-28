package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreateIdentity{}

func NewMsgCreateIdentity(creator string, name string, dob string, publicKey string) *MsgCreateIdentity {
	return &MsgCreateIdentity{
		Creator:   creator,
		Name:      name,
		Dob:       dob,
		PublicKey: publicKey,
	}
}

// Route ...
func (msg MsgCreateIdentity) Route() string {
	return RouterKey
}

// Type ...
func (msg MsgCreateIdentity) Type() string {
	return "CreateIdentity"
}

// GetSigners ...
func (msg *MsgCreateIdentity) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

// GetSignBytes ...
func (msg *MsgCreateIdentity) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

// ValidateBasic ...
func (msg *MsgCreateIdentity) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
