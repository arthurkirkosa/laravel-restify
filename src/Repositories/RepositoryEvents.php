<?php

namespace Binaryk\LaravelRestify\Repositories;

use Binaryk\LaravelRestify\Repositories\Casts\RepositoryCast;

trait RepositoryEvents
{
    /**
     * Used to convert collections for relations.
     *
     * @var RepositoryCast
     */
    public static RepositoryCast $relatedCast;

    /**
     * The array of booted repositories.
     *
     * @var array
     */
    protected static $booted = [];

    /**
     * Perform any actions required before the repository boots.
     *
     * @return void
     */
    protected static function booting()
    {
        //
    }

    /**
     * Boot the repository.
     *
     * @return void
     */
    protected static function boot()
    {
        static::$relatedCast = app(config('restify.casts.related'));
    }

    /**
     * Perform any actions required after the repository boots.
     *
     * @return void
     */
    protected static function booted()
    {
        //
    }

    protected function bootIfNotBooted()
    {
        if (! isset(static::$booted[static::class])) {
            static::$booted[static::class] = true;

            static::booting();
            static::boot();
            static::booted();
        }
    }

    public static function mounting()
    {
        if (static::$prefix) {
            static::setPrefix(static::$prefix, static::uriKey());
        }

        if (static::$indexPrefix) {
            static::setIndexPrefix(static::$indexPrefix, static::uriKey());
        }
    }

    /**
     * Clear the list of booted repositories so they will be re-booted.
     *
     * @return void
     */
    public static function clearBootedRepositories()
    {
        static::$booted = [];
    }
}
