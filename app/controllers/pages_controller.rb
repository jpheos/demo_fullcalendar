class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [ :home ]

  def home

    @events = [
      {
        id: 44,
        title: 'yoga',
        start: '2021-11-25T08:00:00+01:00',
        end: '2021-11-25T11:30:00+01:00'
      },
      {
        id: 45,
        title: 'fitness',
        start: '2021-11-26T08:00:00+01:00',
        end: '2021-11-26T9:30:00+01:00'
      }
    ]
  end
end
