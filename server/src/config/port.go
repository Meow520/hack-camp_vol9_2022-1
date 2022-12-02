package config

import "github.com/Doer-org/hack-camp_vol9_2022-1/utils"

func Port() string {
	return utils.GetEnvOrDefault("PORT", "8080")
}
