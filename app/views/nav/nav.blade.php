    <nav class="navbar navbar-default navbar-fixed-top navbar-inverse" role="navigation">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
            <span class="sr-only">{{ trans('nav.toggle') }}</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="{{ URL::to('/') }}">{{ trans('app.brand') }}</a>
        </div>
        <div class="navbar-collapse collapse">
          @if(Auth::check())
            @include('nav.user')
          @else
            @include('nav.guest')
          @endif
        </div><!--/.nav-collapse -->
    </nav>