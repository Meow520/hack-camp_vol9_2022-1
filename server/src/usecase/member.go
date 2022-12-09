package usecase

import (
	"github.com/Doer-org/hack-camp_vol9_2022-1/domain/entity"
	"github.com/Doer-org/hack-camp_vol9_2022-1/domain/repository"
	usecase_error "github.com/Doer-org/hack-camp_vol9_2022-1/error/usecase"
)

var _ IMemberUsecase = &MemberUsecase{}

type MemberUsecase struct {
	repo repository.IMemberRepository
}

type IMemberUsecase interface {
	CreateMember(name string, roomId string) (*entity.Member, error)
}

func CreateMemberUsecase(repo repository.IMemberRepository) IMemberUsecase {
	return &MemberUsecase{
		repo: repo,
	}
}

func (uc *MemberUsecase) CreateMember(name string, roomId string) (*entity.Member, error) {
	if name == "" {
		return nil, usecase_error.NameEmptyError
	}
	if roomId == "" {
		return nil, usecase_error.RoomdIdUsedError
	}

	member, err := uc.repo.CreateMember(name, roomId)
	return member, err
}