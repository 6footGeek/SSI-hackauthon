package main

import (
	"os"

	"github.com/6footgeek/identity0/app"
	"github.com/6footgeek/identity0/cmd/identity0d/cmd"
	svrcmd "github.com/cosmos/cosmos-sdk/server/cmd"
)

func main() {
	rootCmd, _ := cmd.NewRootCmd()
	if err := svrcmd.Execute(rootCmd, app.DefaultNodeHome); err != nil {
		os.Exit(1)
	}
}
